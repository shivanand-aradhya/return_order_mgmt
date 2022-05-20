package com.roms.packagingdelivery.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
public class ExceptionResponse {
	private Date timestamp;
    private String message;
    private String details;
    private int status;
	public ExceptionResponse(Date timestamp, String message, String details, int status) {
		super();
		this.timestamp = timestamp;
		this.message = message;
		this.details = details;
		this.status = status;
	}
}
