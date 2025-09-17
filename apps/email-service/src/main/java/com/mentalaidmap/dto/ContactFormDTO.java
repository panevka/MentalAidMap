package com.mentalaidmap.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactFormDTO (

	@NotBlank(message = "Name cannot be blank")
	@Size(min = 1, max = 80, message = "Full name length should be between 1 and 80 characters")
	String fullName,

	@NotBlank(message = "Email cannot be blank")
	@Email(message = "Invalid email format")
	@Size(min = 6, max = 254, message = "Email address length should be between 6 and 254 characters")
	String email,

	@NotBlank(message = "Email subject cannot be blank")
	@Size(min = 1, max = 80, message = "Subject line should be between 1 and 80 characters")
	String subject,

	@NotBlank(message = "Email body cannot be blank")
	@Size(min = 1, max = 10240, message = "Email body should be between 1 and 10 240 characters")
	String body
){}
