
package com.mentalaidmap.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "redis")
public record RedisConfig(String host, int port, String password, boolean ssl) {}


