package com.cx.tt.entity


object MDiscuss : BaseEntity() {
    var discussContent = varchar("discuss_content", 1080)
    var disucsserName = varchar("disucsser_name", 1080)
    var disucsserHeadUrl = varchar("disucsser_head_url", 1080)
    val videoId = reference(name = "video_id", foreign = MVideo)
}
