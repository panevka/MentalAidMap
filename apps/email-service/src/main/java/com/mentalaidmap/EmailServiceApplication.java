package com.mentalaidmap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.event.EventListener;

import com.mentalaidmap.service.MailService;

@SpringBootApplication
@ConfigurationPropertiesScan
public class EmailServiceApplication {

	@Autowired
	private MailService senderService;

	public static void main(String[] args) {
		SpringApplication.run(EmailServiceApplication.class, args);
	}

	@EventListener(ApplicationReadyEvent.class)
	void sendMail(){
		senderService.sendEmail("test@gmail.com", "Example subject", "Test message");
	}

}
