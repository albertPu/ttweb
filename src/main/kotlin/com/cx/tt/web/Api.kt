package com.cx.tt.web

class Api {

    companion object {
        /**
         * Api
         */
        const val memberlist = "/api/member/list"
        const val registermember = "/api/member/register"
        const val updatemember = "/api/member/refresh"
        const val login = "/api/member/login"
        const val preOrder = "/api/order/pre"
        const val orderQuery = "/api/order/query"
        const val pageBanner = "/api/page/banner"
        const val pageGetMovie = "/api/page/movies"
        /**
         *admin
         */
        const val AdminLogin = "/admin/login"
        const val AddVideo = "/admin/addVideo"
        const val DeleteVideo = "/admin/deleteVideo"
        const val VideoQuery = "/admin/videoQuery"
        const val VideoQueryByName = "/admin/queryByName"
        const val AddDiscuss = "/admin/addDiscuss"
        const val QueryDiscuss = "/admin/queryDiscuss"
        const val DeleteDiscuss = "/admin/deleteDiscuss"
        const val AddShuffling = "/admin/addShuffling"
        const val QueryShuffling = "/admin/queryShuffling"
        const val DeleteShuffling = "/admin/deleteShuffling"
    }


}