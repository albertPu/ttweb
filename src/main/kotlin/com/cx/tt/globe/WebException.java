package com.cx.tt.globe;

public class WebException extends RuntimeException {

    private String msg;
    private int code = -1;

    public WebException(String msg) {
        this.msg = msg;
    }

    public WebException(String msg, int code) {
        this.msg = msg;
        this.code = code;
    }


    @Override
    public String getMessage() {
        return msg;
    }

    public int getCode() {
        return code;
    }
}
