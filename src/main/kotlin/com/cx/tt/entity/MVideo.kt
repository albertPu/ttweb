package com.cx.tt.entity


object MVideo : BaseEntity() {
    var videoName = varchar("video_name", 1080)
    var coverImageUrl = varchar("cover_imageUrl", 1080)
    var videoPlayUrl = varchar("video_play_url", 1080)
    var desc = text("desc").nullable()
    var discussNumber = integer("discuss_number")
    var videoType = enumeration("video_type", VideoType::class).default(VideoType.Other)
    var vipLevel = integer("vip_level").default(0)
}

enum class VideoType(var type: Int) {
    Domestic(0) {
        override fun desc(): String {
            return "国产"
        }
    },
    Europe(1) {
        override fun desc(): String {
            return "欧美"
        }
    },
    Other(2) {
        override fun desc(): String {
            return "其他"
        }
    };

    abstract fun desc(): String

}