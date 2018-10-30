package com.cx.tt.web.controller.api

import com.cx.tt.entity.MDiscuss
import com.cx.tt.entity.MShuffling
import com.cx.tt.entity.MVideo
import com.cx.tt.entity.ShufflingType
import com.cx.tt.utils.extension.firstOrThrow
import com.cx.tt.web.Api
import com.cx.tt.web.controller.BaseController
import com.cx.tt.web.vo.api.BannerVo
import com.cx.tt.web.vo.api.DetailVo
import com.cx.tt.web.vo.api.DiscussVo
import com.cx.tt.web.vo.api.MovieVo
import org.jetbrains.exposed.sql.Random
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class PageController : BaseController() {

    @GetMapping(Api.pageBanner)
    fun getBanner(): Any {
        val list = ArrayList<BannerVo>()
        transaction {
            MShuffling.selectAll().forEach { row ->
                val banner = BannerVo()
                if (row[MShuffling.shufflingType] == ShufflingType.Video) {
                    val video = MVideo.select {
                        MVideo.id.eq(row[MShuffling.videoId]!!)
                    }.firstOrThrow("视频ID不存在")
                    banner.videoPlayUrl = video[MVideo.videoPlayUrl]
                }
                banner.adCoverImage = row[MShuffling.adCoverImage]
                banner.shufflingType = row[MShuffling.shufflingType].type
                banner.adTitle = row[MShuffling.adTitle]
                banner.adJumpUrl = row[MShuffling.adJumpUrl]
                list.add(banner)
            }
        }
        return success(list)
    }

    @PostMapping(Api.pageGetMovie)
    fun getMovies(@RequestParam("page") page: Int): Any {
        val list = ArrayList<MovieVo>()
        transaction {
            MVideo.selectAll().limit(10, (page - 1) * 10).forEach {
                val movieVo = MovieVo()
                movieVo.coverImageUrl = it[MVideo.coverImageUrl]
                movieVo.videoName = it[MVideo.videoName]
                movieVo.desc = it[MVideo.desc]
                movieVo.videoPlayUrl = it[MVideo.videoPlayUrl]
                movieVo.discussNumber = it[MVideo.discussNumber]
                movieVo.videoType = it[MVideo.videoType].type
                movieVo.vipLevel = it[MVideo.vipLevel]
                movieVo.id = it[MVideo.id].toString()
                movieVo.typeName = it[MVideo.videoType].desc()
                list.add(movieVo)
            }
        }
        return success(list)
    }

    @PostMapping(Api.pageGetMovieMore)
    fun getMoviesMore(@RequestParam("page") page: Int, @RequestParam("id") id: String): Any {
        val detailVo = DetailVo()
        val videoList = ArrayList<MovieVo>()
        val discussList = ArrayList<DiscussVo>()
        transaction {
            MVideo.selectAll().orderBy(Random()).limit(10, (page - 1) * 10).forEach {
                val movieVo = MovieVo()
                movieVo.coverImageUrl = it[MVideo.coverImageUrl]
                movieVo.videoName = it[MVideo.videoName]
                movieVo.desc = it[MVideo.desc]
                movieVo.videoPlayUrl = it[MVideo.videoPlayUrl]
                movieVo.discussNumber = it[MVideo.discussNumber]
                movieVo.videoType = it[MVideo.videoType].type
                movieVo.vipLevel = it[MVideo.vipLevel]
                movieVo.id = it[MVideo.id].toString()
                movieVo.typeName = it[MVideo.videoType].desc()
                videoList.add(movieVo)
            }
            MVideo.select {
                MVideo.id.eq(id)
            }.firstOrThrow("视频ID不存在").also { it ->
                MDiscuss.select {
                    MDiscuss.videoId.eq(it[MVideo.id])
                }.forEach {
                    val discussVo = DiscussVo()
                    discussVo.discussContent = it[MDiscuss.discussContent]
                    discussVo.disucsserHeadUrl = it[MDiscuss.disucsserHeadUrl]
                    discussVo.disucsserName = it[MDiscuss.disucsserName]
                    discussVo.createTime = it[MDiscuss.createTime].toString("yyyy-MM-dd HH:mm:ss")
                    discussList.add(discussVo)
                }
            }
            detailVo.videoList = videoList
            detailVo.discussList = discussList
        }
        return success(detailVo)
    }
}