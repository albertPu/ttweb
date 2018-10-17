package com.cx.tt.entity


object MMember : BaseEntity() {
    var name = varchar("name", 20)
    var age = integer("age").nullable()
    var pwd = varchar("pwd", 20)
    var address = text("address").nullable()
    var phone = varchar("phone", 11).nullable()
    var nickName = varchar("nick_name", 20).nullable()
    var vipLevel = varchar("vip_level", 20).nullable()
    var email = varchar("email", 128).nullable()
    var totalMoney = decimal("total_money", 11, 2).nullable()
    var expireData = datetime("expire_data").nullable()
}