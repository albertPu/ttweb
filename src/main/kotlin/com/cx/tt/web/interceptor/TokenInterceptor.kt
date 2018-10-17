package com.cx.tt.web.interceptor

import com.cx.tt.globe.WebException
import org.springframework.lang.Nullable
import org.springframework.web.servlet.HandlerInterceptor
import javax.servlet.http.HttpServletResponse
import org.springframework.web.servlet.ModelAndView
import javax.servlet.http.HttpServletRequest

class TokenInterceptor : HandlerInterceptor {

    @Throws(Exception::class)
    override fun preHandle(request: HttpServletRequest, httpServletResponse: HttpServletResponse, o: Any): Boolean {
        request.getParameter("token") ?: throw WebException("请输入token")
        return true
    }

    @Throws(Exception::class)
    override fun postHandle(httpServletRequest: HttpServletRequest, httpServletResponse: HttpServletResponse, o: Any, @Nullable modelAndView: ModelAndView?) {

    }

    @Throws(Exception::class)
    override fun afterCompletion(httpServletRequest: HttpServletRequest, httpServletResponse: HttpServletResponse, o: Any, @Nullable ex: java.lang.Exception?) {
    }
}