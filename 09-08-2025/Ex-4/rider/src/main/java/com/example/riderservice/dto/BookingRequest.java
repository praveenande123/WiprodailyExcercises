package com.example.riderservice.dto;

import lombok.Data;

@Data
public class BookingRequest {
    private String userId;
    private String pickup;
    private String dropoff;
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
    
}
