package com.example.riderservice.dto;

import lombok.Data;
import java.time.Instant;

@Data
public class R2UMessage {
    private Long bookingId;
    private String userId;
    private String pickup;
    private String dropoff;
    private Instant timestamp;
	public Long getBookingId() {
		return bookingId;
	}
	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPickup() {
		return pickup;
	}
	public void setPickup(String pickup) {
		this.pickup = pickup;
	}
	public String getDropoff() {
		return dropoff;
	}
	public void setDropoff(String dropoff) {
		this.dropoff = dropoff;
	}
	public Instant getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Instant timestamp) {
		this.timestamp = timestamp;
	}
	@Override
	public String toString() {
		return "R2UMessage [bookingId=" + bookingId + ", userId=" + userId + ", pickup=" + pickup + ", dropoff="
				+ dropoff + ", timestamp=" + timestamp + "]";
	}
	
}
