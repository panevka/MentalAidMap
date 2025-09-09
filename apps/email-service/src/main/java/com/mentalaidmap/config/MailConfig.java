package com.mentalaidmap.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "mail")
public record MailConfig(String username) {}
