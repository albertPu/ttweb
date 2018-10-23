package com.cx.tt.web.vo.api

data class MemberVO(var name: String? = "", var age: Int? = 0, var token: String? = "", var expiration: String = "", var vipLevel: String? = "VIP0")