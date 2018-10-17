package com.cx.tt.entity


object MOrders : BaseEntity() {
    var orderNo = varchar("order_no", 20)
    val memberId = reference(name = "member_id", foreign = MMember)
    var money = decimal("money", 11, 2).nullable()
    val orderState = enumeration("orderState", OrderState::class)
}

enum class OrderState {
    Success, UnPay
}