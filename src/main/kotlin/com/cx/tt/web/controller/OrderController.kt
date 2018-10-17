package com.cx.tt.web.controller

import com.cx.tt.entity.MMember
import com.cx.tt.entity.MOrders
import com.cx.tt.entity.OrderState
import com.cx.tt.globe.WebException
import com.cx.tt.utils.extension.createOrderNo
import com.cx.tt.utils.extension.firstOrThrow
import com.cx.tt.web.Api
import com.cx.tt.web.vo.OrderVO
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.math.BigDecimal

@RestController
class OrderController : BaseController() {

    @PostMapping(Api.preOrder)
    fun preOrder(@RequestParam("token") token: String,
                 @RequestParam("money") money: String): Any {
        var order: OrderVO? = null
        transaction {
            MMember.select {
                MMember.token eq token
            }.firstOrThrow("登录已失效")?.let { row ->
                MOrders.insert {
                    val orders = String().createOrderNo()
                    it[MOrders.memberId] = row[MMember.id]
                    it[MOrders.orderNo] = orders
                    try {
                        it[MOrders.money] = BigDecimal(money)
                    } catch (e: Exception) {
                        throw WebException("输入金额有误")
                    }
                    it[MOrders.orderState] = OrderState.UnPay
                    order = OrderVO(order = orders, money = money, desc = OrderState.UnPay.desc())
                }
            }
        }
        return success(order)
    }
}