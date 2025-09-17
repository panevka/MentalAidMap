package com.mentalaidmap.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mentalaidmap.dto.ContactFormDTO;
import com.mentalaidmap.config.MailConfig;

@Service
public class ContactFormService {

	@Autowired
	private MailService senderService;
	private final MailConfig mailConfig;

	public ContactFormService(MailConfig mailConfig) {
		this.mailConfig = mailConfig;
	}

	public void saveFormData(ContactFormDTO contactForm) {
		String appEmailAddress = mailConfig.username();
		senderService.sendEmail(appEmailAddress, appEmailAddress, contactForm.getSubject(), contactForm.getBody());
	}

	public void transformMessageBody(){
	}

}
