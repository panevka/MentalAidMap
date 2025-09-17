package com.mentalaidmap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mentalaidmap.dto.ContactFormDTO;
import com.mentalaidmap.service.ContactFormService;

import jakarta.validation.Valid;

@RestController
public class ContactController {

	@Autowired
	private ContactFormService contactService;

	@PostMapping("/send")
	public ResponseEntity<HttpStatus> send(@Valid @RequestBody ContactFormDTO request) {
		contactService.saveFormData(request);
		return ResponseEntity.ok(HttpStatus.OK);
	}

}
