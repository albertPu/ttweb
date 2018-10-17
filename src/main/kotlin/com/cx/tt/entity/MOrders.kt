package com.cx.tt.entity


object MOrders : BaseEntity() {
    var orderNo = varchar("order_no", 20)
    val memberId = reference(name = "member_id", foreign = MMember)
    var money = decimal("money", 11, 2).nullable()
    val orderState = enumeration("orderState", OrderState::class)
}

enum class OrderState {
    Success {
        override fun desc(): String {
            return "支付成功"
        }
    },
    UnPay {
        override fun desc(): String {
            return "未支付"
        }
    };

    abstract fun desc(): String
}