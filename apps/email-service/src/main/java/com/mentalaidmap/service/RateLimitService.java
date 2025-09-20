
package com.mentalaidmap.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Instant;

import lombok.extern.java.Log;

import com.mentalaidmap.entity.Requestor;

@Log
@Service
public class RateLimitService {

	@Autowired
	private RedisTemplate<String, Requestor> template;
	private String KEY_PREFIX = "token_bucket:";
	private int CAPACITY = 3;

	public boolean tryConsumeRequest(String ip) {
		Requestor requestor = getRequestor(ip);
		if (requestor == null) {
			saveNewRequestor(ip, Instant.now(), CAPACITY);
			return false;
		}
		if (requestor.tokenCount() > 0) {
			Requestor newData = new Requestor(Instant.now().toEpochMilli(),
					requestor.tokenCount() - 1);
			template.opsForValue().set(KEY_PREFIX + ip, newData);
			return true;
		} else {
			return false;
		}

	}

	private boolean saveNewRequestor(String ip, Instant timestamp, int tokenCount) {
		Requestor requestor = new Requestor(timestamp.toEpochMilli(), tokenCount);
		template.opsForValue().set(KEY_PREFIX + ip, requestor);
		return true;
	}

	private Requestor getRequestor(String ip) {
		Requestor requestor = template.opsForValue().get(KEY_PREFIX + ip);
		return requestor;
	}

}
