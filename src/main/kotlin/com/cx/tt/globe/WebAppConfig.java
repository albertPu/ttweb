package com.cx.tt.globe;

import com.cx.tt.web.Api;
import com.cx.tt.web.interceptor.LoginUserInfoMethodArgumentResolver;
import com.cx.tt.web.interceptor.TokenInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebAppConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //注册自定义拦截器，添加拦截路径和排除拦截路径
        registry.addInterceptor(new TokenInterceptor())
                .addPathPatterns("/api/order/**")
                .addPathPatterns("/api/member/**")
                .excludePathPatterns(Api.memberlist)
                .excludePathPatterns(Api.registermember)
                .excludePathPatterns(Api.login);
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        argumentResolvers.add(new LoginUserInfoMethodArgumentResolver());
    }
}
