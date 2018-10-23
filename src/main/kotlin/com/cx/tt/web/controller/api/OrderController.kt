package com.cx.tt.web.controller.api

import com.cx.tt.entity.MMember
import com.cx.tt.entity.MOrders
import com.cx.tt.entity.OrderState
import com.cx.tt.globe.MemberRow
import com.cx.tt.globe.WebException
import com.cx.tt.utils.extension.createOrderNo
import com.cx.tt.utils.extension.firstOrThrow
import com.cx.tt.web.Api
import com.cx.tt.web.controller.BaseController
import com.cx.tt.web.vo.api.OrderVO
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.and
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
    fun preOrder(@MemberRow member: ResultRow,
                 @RequestParam("money") money: String,
                 @RequestParam("token") token: String): Any {
        var order: OrderVO? = null
        transaction {
            MOrders.insert {
                val orders = String().createOrderNo()
                it[MOrders.memberId] = member[MMember.id]
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
        return success(order)
    }

    @PostMapping(Api.orderQuery)
    fun orderQuery(@RequestParam("orderNo") orderNo: String, @RequestParam("token") token: String, @MemberRow member: ResultRow): Any {
        var order: OrderVO? = null
        transaction {
            MOrders.select {
                MOrders.orderNo eq orderNo and MOrders.memberId.eq(member[MMember.id])
            }.firstOrThrow("订单号不存在")?.let {
                order = OrderVO(order = it[MOrders.orderNo], money = it[MOrders.money]?.toPlainString(), desc = it[MOrders.orderState].desc())
            }
        }
        return success(order)
    }

}