package com.cx.tt.globe;

import java.lang.annotation.*;

@Target({ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface MemberRow {
    String value() default "user";
}
