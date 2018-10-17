package com.cx.tt.web.vo

data class BaseVO(var code: Int = 200,
                  var success: Boolean = true,
                  var data: Any? = null,
                  var msg: String = ""
)