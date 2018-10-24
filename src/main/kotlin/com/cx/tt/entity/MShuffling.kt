package com.cx.tt.entity


object MShuffling : BaseEntity() {

    var shufflingType = enumeration("shuffling_type", ShufflingType::class).default(ShufflingType.Video)
    var videoId = reference(name = "video_id", foreign = MVideo).nullable()
    var adCoverImage = varchar("ad_cover_image", 1080)
    var adJumpUrl = varchar("ad_jump_url", 1080)
    var adTitle = varchar("ad_title", 1080)
}

enum class ShufflingType(var type: Int) {
    Video(0) {
        override fun desc(): String {
            return "视频"
        }
    },
    Adv(1) {
        override fun desc(): String {
            return "广告"
        }
    };

    abstract fun desc(): String

}