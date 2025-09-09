package com.mentalaidmap.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.mentalaidmap.config.MailConfig;

@Service
public class MailService {

	@Autowired
	private JavaMailSender mailSender;
	private final MailConfig mailConfig;

	public MailService(MailConfig mailConfig) {
		this.mailConfig = mailConfig;
	}

	public void sendEmail(String toEmail, String subject, String body) {
		SimpleMailMessage message = new SimpleMailMessage();
		String appEmailAddress = mailConfig.username();

		message.setFrom(appEmailAddress);
		message.setTo(toEmail);
		message.setSubject(subject);
		message.setText(body);
		message.setReplyTo(appEmailAddress);
		message.setText(body);

		mailSender.send(message);

		System.out.printf("Mail sent! Username: %s ", appEmailAddress);
	}

}
