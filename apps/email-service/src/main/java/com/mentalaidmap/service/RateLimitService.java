
package com.mentalaidmap.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.function.Supplier;

import lombok.extern.java.Log;

import io.github.bucket4j.Bucket;
import io.github.bucket4j.BucketConfiguration;
import io.github.bucket4j.ConsumptionProbe;
import io.github.bucket4j.distributed.proxy.ProxyManager;

@Log
@Service
public class RateLimitService {

	private static final String globalKey = "GLOBAL_DAILY_LIMIT";

	@Autowired
	@Qualifier("ipBucketConfig")
	Supplier<BucketConfiguration> ipBucketConfiguration;

	@Autowired
	@Qualifier("globalBucketConfig")
	Supplier<BucketConfiguration> globalBucketConfiguration;

	@Autowired
	ProxyManager<String> proxyManager;

	public boolean tryConsumeRequest(String ip) {
		// Bucket globalBucket = proxyManager.builder().build(globalKey,
		// globalBucketConfiguration);
		// ConsumptionProbe globalProbe = globalBucket.tryConsumeAndReturnRemaining(1);

		Bucket ipBucket = proxyManager.builder().build(ip, ipBucketConfiguration);
		ConsumptionProbe ipProbe = ipBucket.tryConsumeAndReturnRemaining(1);

		// if (ipProbe.isConsumed() && globalProbe.isConsumed()) {
		if (ipProbe.isConsumed()) {
			return true;
		} else {
			return false;
		}
	}

}
