package com.example.uberservice.dto;

import lombok.Data;

@Data
public class U2RMessage {
    private Long bookingId;
    private String status;
    private String driverId;
    private Integer etaSeconds;
}
