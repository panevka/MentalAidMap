package com.mentalaidmap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mentalaidmap.dto.ContactFormDTO;
import com.mentalaidmap.service.MailService;

@RestController
public class MailController {

	@Autowired
	private MailService senderService;

	@PostMapping("/send")
	public ResponseEntity<HttpStatus> send(@RequestBody ContactFormDTO request) {
		senderService.sendEmail(request.getEmail(), request.getSubject(), request.getBody());
		return ResponseEntity.ok(HttpStatus.OK);
	}

}
