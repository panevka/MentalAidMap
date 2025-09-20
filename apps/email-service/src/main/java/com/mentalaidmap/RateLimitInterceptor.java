package com.mentalaidmap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.mentalaidmap.service.RateLimitService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
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

		if (!shouldPass) {
			HttpServletResponse httpResponse = (HttpServletResponse) response;
			httpResponse.setContentType("text/plain");
			httpResponse.setStatus(429);
		}
		return shouldPass;
	}
}
