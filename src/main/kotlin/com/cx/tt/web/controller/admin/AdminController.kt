package com.cx.tt.web.controller.admin

import com.cx.tt.entity.*
import com.cx.tt.globe.WebException
import com.cx.tt.utils.extension.firstOrThrow
import com.cx.tt.utils.extension.getPages
import com.cx.tt.utils.extension.isNotNull
import com.cx.tt.utils.extension.isNull
import com.cx.tt.web.Api
import com.cx.tt.web.controller.BaseController
import com.cx.tt.web.vo.admin.*
import com.sun.org.apache.bcel.internal.generic.IFEQ
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@Suppress("IMPLICIT_CAST_TO_ANY")
@RestController
class AdminController : BaseController() {

    @PostMapping(Api.AdminLogin)
    fun login(@RequestParam("username") username: String, @RequestParam("password") password: String): Any {
        val data = LoginVo()
        data.token = "136523"
        return success(data)
    }

    /**
     * 视频操作
     */
    @PostMapping(Api.AddVideo)
    fun addVideo(@RequestBody video: VideoVo): Any {
        transaction {
            if (video.id.isEmpty()) {
                MVideo.select {
                    MVideo.videoName.eq(video.videoName)
                }.isNull("视频名称已存在").let { _ ->
                    MVideo.insert {
                        it[MVideo.videoName] = video.videoName
                        it[MVideo.videoPlayUrl] = video.videoPlayUrl
                        it[MVideo.coverImageUrl] = video.coverImageUrl
                        it[MVideo.desc] = video.desc
                        it[MVideo.discussNumber] = video.discussNumber
                        it[MVideo.videoType] = VideoType.values()[video.addVideoType]
                        it[MVideo.vipLevel] = video.vipLevel
                    }
                }
            } else {
                MVideo.update({
                    MVideo.id.eq(video.id)
                }) {
                    it[MVideo.videoName] = video.videoName
                    it[MVideo.coverImageUrl] = video.coverImageUrl
                    it[MVideo.videoPlayUrl] = video.videoPlayUrl
                    it[MVideo.desc] = video.desc
                    it[MVideo.discussNumber] = video.discussNumber
                    it[MVideo.videoType] = VideoType.values()[video.addVideoType]
                    it[MVideo.vipLevel] = video.vipLevel
                }
            }
        }
        return success()
    }

    @PostMapping(Api.VideoQuery)
    fun videoQuery(@RequestBody query: QueryVideoVo): Any {
        val videoRes = VideosVo()
        val videoList = ArrayList<VideoVo>()
        videoRes.videos = videoList
        videoRes.page = query.currentPage
        transaction {
            videoRes.totalPage = MVideo.select {
                if (!query.queryVideoName.isEmpty()) {
                    MVideo.videoName.like(query.queryVideoName) and
                            MVideo.videoType.eq(VideoType.values()[query.queryVideoType])
                } else {
                    MVideo.videoType.eq(VideoType.values()[query.queryVideoType])
                }
            }.isNotNull("数据不存在").getPages()

            MVideo.select {
                if (!query.queryVideoName.isEmpty()) {
                    MVideo.videoName.like(query.queryVideoName) and
                            MVideo.videoType.eq(VideoType.values()[query.queryVideoType])
                } else {
                    MVideo.videoType.eq(VideoType.values()[query.queryVideoType])
                }
            }.limit(10, query.currentPage - 1).orderBy(MVideo.createTime).forEach {
                val vr = VideoVo()
                vr.id = it[MVideo.id].toString()
                vr.videoName = it[MVideo.videoName]
                vr.coverImageUrl = it[MVideo.coverImageUrl]
                vr.videoPlayUrl = it[MVideo.videoPlayUrl]
                vr.desc = it[MVideo.desc].toString()
                vr.discussNumber = it[MVideo.discussNumber]
                vr.addVideoType = it[MVideo.videoType].type
                vr.typeName = it[MVideo.videoType].desc()
                vr.vipLevel = it[MVideo.vipLevel]
                videoList.add(vr)
            }


        }
        return success(videoRes)
    }

    @PostMapping(Api.DeleteVideo)
    fun deleteVideo(@RequestParam("id") id: String): Any {
        transaction {
            MVideo.deleteWhere { MVideo.id.eq(id) }
        }
        return success()
    }

    @PostMapping(Api.VideoQueryByName)
    fun videoQueryByName(@RequestParam("videoName") videoName: String): Any {
        val vr = VideoVo()
        transaction {
            MVideo.select {
                MVideo.videoName.eq(videoName)
            }.firstOrThrow("该视频名称不存在")?.let {
                vr.id = it[MVideo.id].toString()
                vr.videoName = it[MVideo.videoName]
                vr.coverImageUrl = it[MVideo.coverImageUrl]
                vr.videoPlayUrl = it[MVideo.videoPlayUrl]
                vr.desc = it[MVideo.desc].toString()
                vr.discussNumber = it[MVideo.discussNumber]
                vr.addVideoType = it[MVideo.videoType].type
                vr.typeName = it[MVideo.videoType].desc()
                vr.vipLevel = it[MVideo.vipLevel]
            }
        }

        return success(vr)
    }

    /**
     * 评论操作
     */

    @PostMapping(Api.AddDiscuss)
    fun addDiscuss(@RequestBody discuss: DiscussVo): Any {
        transaction {
            var video = transaction {
                MVideo.select {
                    MVideo.id.eq(discuss.videoId)
                }.firstOrThrow("视频不存在")
            }
            MDiscuss.select {
                MDiscuss.discussContent.eq(discuss.discussContent) and MDiscuss.disucsserName.eq(discuss.disucsserName)
            }.isNull("评论已存在")
            MDiscuss.insert {
                it[MDiscuss.videoId] = video!![MVideo.id]
                it[MDiscuss.disucsserHeadUrl] = discuss.disucsserHeadUrl
                it[MDiscuss.disucsserName] = discuss.disucsserName
                it[MDiscuss.discussContent] = discuss.discussContent
            }
        }
        return success()
    }

    @PostMapping(Api.QueryDiscuss)
    fun queryDiscuss(@RequestBody queryDiscussVo: QueryDiscussVo): Any {
        val videos = ArrayList<DiscussVo>()
        transaction {
            MDiscuss.select {
                MDiscuss.videoId.eq(queryDiscussVo.videoId)
            }.isNotNull("暂无评论").forEach {
                val discussVo = DiscussVo()
                discussVo.discussContent = it[MDiscuss.discussContent]
                discussVo.disucsserName = it[MDiscuss.disucsserName]
                discussVo.disucsserHeadUrl = it[MDiscuss.disucsserHeadUrl]
                discussVo.id = it[MDiscuss.id].toString()
                videos.add(discussVo)
            }
        }
        return success(videos)
    }

    @PostMapping(Api.DeleteDiscuss)
    fun deleteDiscuss(@RequestParam("id") id: String): Any {
        transaction {
            MDiscuss.deleteWhere {
                MDiscuss.id.eq(id)
            }
        }
        return success()
    }

    /**
     *轮播图操作
     */
    @PostMapping(Api.AddShuffling)
    fun addShuffling(@RequestBody shuffling: ShufflingVo): Any {
        transaction {
            val count = MShuffling.selectAll().count()
            if (shuffling.id.isEmpty() && count > 10) throw WebException("轮播数量最多为10张，请删除再添加")

            val type = ShufflingType.values()[shuffling.shufflingType]

            if (shuffling.id.isNotEmpty()) {
                MShuffling.update({ MShuffling.id.eq(shuffling.id) }) {
                    if (type == ShufflingType.Video) {
                        MVideo.select { MVideo.id.eq(shuffling.videoId) }.firstOrThrow("视频ID不存在")?.let { row ->
                            it[MShuffling.videoId] = row[MVideo.id]
                        }
                    }
                    it[MShuffling.adCoverImage] = shuffling.adCoverImage
                    it[MShuffling.adJumpUrl] = shuffling.adJumpUrl
                    it[MShuffling.adTitle] = shuffling.adTitle
                    it[MShuffling.shufflingType] = type
                }
            } else {
                MShuffling.insert {
                    it[MShuffling.adCoverImage] = shuffling.adCoverImage
                    it[MShuffling.adJumpUrl] = shuffling.adJumpUrl
                    it[MShuffling.adTitle] = shuffling.adTitle
                    it[MShuffling.shufflingType] = type
                }
            }


        }
        return success()
    }

    @PostMapping(Api.DeleteShuffling)
    fun deleteShuffling(@RequestParam("id") id: String): Any {
        transaction {
            MShuffling.deleteWhere {
                MShuffling.id.eq(id)
            }
        }
        return success()
    }

    @PostMapping(Api.QueryShuffling)
    fun queryShuffling(): Any {
        val list = ArrayList<ShufflingVo>()
        transaction {
            MShuffling.selectAll().forEach {
                val shuffling = ShufflingVo()
                shuffling.id = it[MShuffling.id].toString()
                shuffling.adCoverImage = it[MShuffling.adCoverImage]
                shuffling.adJumpUrl = it[MShuffling.adJumpUrl]
                shuffling.adTitle = it[MShuffling.adTitle]
                shuffling.shufflingType=it[MShuffling.shufflingType].type
                shuffling.videoId = it[MShuffling.videoId].toString()
                if (shuffling.videoId != "null") {
                    shuffling.videoName = MVideo.select {
                        MVideo.id.eq(shuffling.videoId)
                    }.single()[MVideo.videoName]
                }
                list.add(shuffling)
            }
        }

        return success(list)
    }


}
