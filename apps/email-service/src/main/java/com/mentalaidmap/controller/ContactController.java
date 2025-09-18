package com.mentalaidmap.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mentalaidmap.dto.ContactFormDTO;
import com.mentalaidmap.service.ContactFormService;
import com.mentalaidmap.validator.ValidationException;

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

	@ExceptionHandler(ValidationException.class)
	public ResponseEntity<Map<String, String>> handleContactFormException(ValidationException ex) {
		Map<String, String> error = new HashMap<>();
		error.put("error", ex.getMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}
}
