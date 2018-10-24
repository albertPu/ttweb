package com.cx.tt.web.controller.api

import com.cx.tt.entity.MMember
import com.cx.tt.entity.MVideo
import com.cx.tt.utils.extension.firstOrThrow
import com.cx.tt.utils.extension.isNull
import com.cx.tt.web.Api
import com.cx.tt.web.VipLevel
import com.cx.tt.web.controller.BaseController
import com.cx.tt.web.vo.api.MemberVO
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
class MemberController : BaseController() {

    @GetMapping(Api.memberlist)
    fun getMember(): Any {
        val rsMembers = ArrayList<MemberVO>()
        transaction {
            MMember.selectAll().forEach {
                rsMembers.add(MemberVO(
                        it[MMember.name],
                        it[MMember.age],
                        it[MMember.token],
                        it[MMember.expireData].toString(),
                        it[MMember.vipLevel]
                ))
            }
        }
        return success(rsMembers)
    }

    @PostMapping(Api.registermember)
    fun register(@RequestParam("name") name: String,
                 @RequestParam("pwd") pwd: String,
                 @RequestParam("age") age: Int): Any {
        var member: MemberVO? = null
        transaction {
            MMember.select {
                MMember.name.eq(name)
            }.isNull("用户已存在").let { _ ->
                MMember.insert {
                    it[MMember.name] = name
                    it[MMember.pwd] = pwd
                    it[MMember.age] = age
                    it[MMember.vipLevel] = VipLevel.VIP0
                    member = MemberVO(name, age)
                }
            }
        }
        return success(member)
    }

    @PostMapping(Api.login)
    fun login(@RequestParam("name") name: String, @RequestParam("pwd") pwd: String): Any {
        var member: MemberVO? = null
        transaction {
            MMember.select {
                MMember.name.eq(name) and MMember.pwd.eq(pwd)
            }.firstOrThrow("用户名或密码错误")?.let {
                member = MemberVO(it[MMember.name], it[MMember.age], it[MMember.token], it[MMember.expireData].toString())
                MMember.update {
                    val uuid = UUID.randomUUID().toString()
                    it[MMember.token] = uuid
                    member = member?.copy(token = uuid)
                }
            }
        }
        return success(member)
    }

    @PostMapping(Api.updatemember)
    fun updateMember(@RequestParam("age") age: Int,
                     @RequestParam("name") name: String,
                     @RequestParam("address") address: String,
                     @RequestParam("phone") phone: String,
                     @RequestParam("nickName") nickName: String): Any {
        val member: MemberVO? = null
        transaction {
            MMember.select {
                MMember.name.eq(name)
            }.firstOrThrow("用户名不存在")?.let { it ->
                MMember.update({ MMember.id.eq(it[MMember.id]) }) {
                    it[MMember.age] = 0
                    it[MMember.address] = address
                    it[MMember.phone] = phone
                    it[MMember.nickName] = nickName
                }
            }
        }
        return success(member)
    }



}