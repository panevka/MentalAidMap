package com.mentalaidmap.validator;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.mentalaidmap.dto.ContactFormDTO;

public final class ContactFormValidator {

	private static final Pattern FULL_NAME_PATTERN = Pattern.compile("^[\\p{L} '-]+$");
	private static final Pattern SUBJECT = Pattern.compile("^[\\p{L}0-9 .,!?\"'@#&()\\-]+$");
	private static final Pattern EMAIL = Pattern.compile(
			"^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$");

	public static void validate(ContactFormDTO dto) {
		String subject = URLDecoder.decode(dto.subject(), StandardCharsets.UTF_8);
		validateSubject(subject);

		String email = URLDecoder.decode(dto.email(), StandardCharsets.UTF_8);
		validateEmail(email);

		String fullName = URLDecoder.decode(dto.fullName(), StandardCharsets.UTF_8);
		validateFullName(fullName);
	}

	private static void validateFullName(String fullName) {
		Matcher m = FULL_NAME_PATTERN.matcher(fullName);
		if (!m.matches()) {
			throw new ValidationException("Full name contains invalid characters");
		}
	}

	private static void validateEmail(String email) {
		Matcher m = EMAIL.matcher(email);
		if (!m.matches()) {
			throw new ValidationException("Email contains invalid characters");
		}
	}

	private static void validateSubject(String subject) {
		Matcher m = SUBJECT.matcher(subject);
		if (!m.matches()) {
			throw new ValidationException("Subject contains invalid characters");
		}
	}
}
