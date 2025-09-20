package com.mentalaidmap.config;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.BucketConfiguration;
import io.github.bucket4j.distributed.ExpirationAfterWriteStrategy;
import io.github.bucket4j.distributed.proxy.ProxyManager;
import io.github.bucket4j.redis.lettuce.Bucket4jLettuce;
import io.github.bucket4j.redis.lettuce.cas.LettuceBasedProxyManager;
import io.lettuce.core.RedisClient;
import io.lettuce.core.RedisURI;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.codec.ByteArrayCodec;
import io.lettuce.core.codec.RedisCodec;
import io.lettuce.core.codec.StringCodec;
import java.util.function.Supplier;

@Configuration
public class RateLimiterConfig {

	@Autowired
	private RedisConfig redisConfig;
	private static final int CAPACITY = 3;
	private static final Duration REFILL_DURATION = Duration.ofMinutes(1);

	@Bean
	public RedisClient redisClient() {
		return RedisClient.create(RedisURI.builder()
				.withHost(redisConfig.host())
				.withPort(redisConfig.port())
				.withSsl(redisConfig.ssl())
				.withPassword(redisConfig.password())
				.build());
	}

	@Bean
	public ProxyManager<String> lettuceBasedProxyManager() {
		RedisClient client = redisClient();

		StatefulRedisConnection<String, byte[]> redisConnection = client
				.connect(RedisCodec.of(StringCodec.UTF8, ByteArrayCodec.INSTANCE));

		LettuceBasedProxyManager<String> proxy = Bucket4jLettuce.casBasedBuilder(redisConnection)
				.expirationAfterWrite(ExpirationAfterWriteStrategy
						.basedOnTimeForRefillingBucketUpToMax(Duration.ofMinutes(15)))
				.build();

		return proxy;
	}

	@Bean("ipBucketConfig")
	public Supplier<BucketConfiguration> bucketConfiguration() {
		Bandwidth bandwidth = Bandwidth.builder().capacity(CAPACITY)
				.refillIntervally(CAPACITY, REFILL_DURATION).build();

		return () -> BucketConfiguration.builder()
				.addLimit(bandwidth)
				.build();
	}

	// @Bean("globalBucketConfig")
	// public Supplier<BucketConfiguration> globalDailyBucketConfiguration() {
	// Bandwidth dailyLimit = Bandwidth.builder()
	// .capacity(500)
	// .refillIntervally(500, Duration.ofDays(1))
	// .build();
	//
	// return () -> BucketConfiguration.builder()
	// .addLimit(dailyLimit)
	// .build();
	// }

}
