package com.cx.tt.web.interceptor

import com.cx.tt.entity.MMember
import com.cx.tt.utils.extension.firstOrThrow
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.core.MethodParameter
import org.springframework.lang.Nullable
import org.springframework.web.bind.support.WebDataBinderFactory
import org.springframework.web.context.request.NativeWebRequest
import org.springframework.web.method.support.HandlerMethodArgumentResolver
import org.springframework.web.method.support.ModelAndViewContainer

class LoginUserInfoMethodArgumentResolver : HandlerMethodArgumentResolver {

    override fun supportsParameter(parameter: MethodParameter): Boolean {
        return parameter.getParameterType().equals(ResultRow::class.java);
    }

    @Throws(Exception::class)
    override fun resolveArgument(parameter: MethodParameter, @Nullable mavContainer: ModelAndViewContainer?, webRequest: NativeWebRequest, @Nullable binderFactory: WebDataBinderFactory?): Any? {
        val token = webRequest.getParameter("token")
        var member: Any? = null
        transaction {
            member = MMember.select { MMember.token.eq(token) }
                    .firstOrThrow("登录已失效")
        }
        return member as Any
    }
}