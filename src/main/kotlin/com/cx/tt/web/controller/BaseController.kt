package com.cx.tt.web.controller

import com.cx.tt.web.vo.BaseVO

open class BaseController {

    fun success(any: Any? = null): Any {
        return BaseVO(data = any)
    }
}