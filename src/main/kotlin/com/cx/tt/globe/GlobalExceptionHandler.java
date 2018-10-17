package com.cx.tt.globe;

import com.cx.tt.web.vo.BaseVO;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    //声明要捕获的异常
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public BaseVO exceptionHandler(HttpServletRequest request, Exception e) {
        e.printStackTrace();
        BaseVO responseBase = new BaseVO();
        responseBase.setSuccess(false);
        responseBase.setData(null);
        if (e instanceof WebException) {
            WebException businessException = (WebException) e;
            responseBase.setMsg(businessException.getMessage());
            responseBase.setCode(((WebException) e).getCode());
            return responseBase;
        }
        //未知错误
        responseBase.setMsg("系统异常：\\n" + e);
        return responseBase;
    }

}
