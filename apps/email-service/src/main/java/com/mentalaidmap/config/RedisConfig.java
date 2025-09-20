package com.mentalaidmap.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;

import com.mentalaidmap.entity.Requestor;

@Configuration
public class RedisConfig {
	@Bean
	public RedisConnectionFactory redisConnectionFactory() {
		return new LettuceConnectionFactory("localhost", 6379);
	}

	@Bean
	public RedisTemplate<String, Requestor> redisTemplate(RedisConnectionFactory connectionFactory) {
		RedisTemplate<String, Requestor> template = new RedisTemplate<String, Requestor>();
		template.setConnectionFactory(connectionFactory);

		RedisSerializer<String> stringSerializer = new StringRedisSerializer();
		template.setKeySerializer(stringSerializer);

		template.setValueSerializer(new GenericJackson2JsonRedisSerializer());

		template.afterPropertiesSet();

		return template;
	}

}
