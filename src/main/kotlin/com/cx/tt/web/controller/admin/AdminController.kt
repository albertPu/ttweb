package com.cx.tt.web.controller.admin

import com.cx.tt.entity.MVideo
import com.cx.tt.entity.VideoType
import com.cx.tt.utils.extension.getPages
import com.cx.tt.utils.extension.isNotNull
import com.cx.tt.utils.extension.isNull
import com.cx.tt.web.Api
import com.cx.tt.web.VipLevel
import com.cx.tt.web.controller.BaseController
import com.cx.tt.web.vo.admin.LoginVo
import com.cx.tt.web.vo.admin.QueryVieoVo
import com.cx.tt.web.vo.admin.VideoVo
import com.cx.tt.web.vo.admin.VideosVo
import com.cx.tt.web.vo.api.MemberVO
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.update
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
                }
            }
        }
        return success()
    }

    @PostMapping(Api.VideoQuery)
    fun videoQuery(@RequestBody query: QueryVieoVo): Any {
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
                videoList.add(vr)
            }


        }
        return success(videoRes)
    }
}
