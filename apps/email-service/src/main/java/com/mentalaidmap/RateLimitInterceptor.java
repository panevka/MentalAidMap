package com.mentalaidmap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.HandlerInterceptor;

import com.mentalaidmap.service.RateLimitService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Service
public class RateLimitInterceptor implements HandlerInterceptor {

	@Autowired
	public RateLimitService rateLimitService;

	@Override
	public boolean preHandle(
			HttpServletRequest request,
			HttpServletResponse response,
			Object handler)
			throws Exception {

		String clientIp = request.getRemoteAddr();
		boolean shouldPass = rateLimitService.tryConsumeRequest(clientIp);
		return shouldPass;
	}
}
