package com.example.riderservice.dto;

import lombok.Data;

@Data
public class U2RMessage {
    private Long bookingId;
    private String status;
    private String driverId;
    private Integer etaSeconds;
	public Long getBookingId() {
		return bookingId;
	}
	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDriverId() {
		return driverId;
	}
	public void setDriverId(String driverId) {
		this.driverId = driverId;
	}
	public Integer getEtaSeconds() {
		return etaSeconds;
	}
	public void setEtaSeconds(Integer etaSeconds) {
		this.etaSeconds = etaSeconds;
	}
}
