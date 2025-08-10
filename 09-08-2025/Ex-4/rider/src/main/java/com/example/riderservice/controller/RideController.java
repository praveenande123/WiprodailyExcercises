package com.example.riderservice.controller;

import com.example.riderservice.domain.Booking;
import com.example.riderservice.dto.BookingRequest;
import com.example.riderservice.dto.R2UMessage;
import com.example.riderservice.kafka.RiderKafkaProducer;
import com.example.riderservice.repo.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;

@RestController
@RequiredArgsConstructor
public class RideController {
    private final BookingRepository bookingRepository;
    private final RiderKafkaProducer producer;

    @PostMapping("/ride")
    public ResponseEntity<Booking> createRide(@RequestBody BookingRequest req) {
        Booking b = new Booking();
        b.setUserId(req.getUserId());
        b.setPickup(req.getPickup());
        b.setDropoff(req.getDropoff());
        b.setStatus("REQUESTED");
        b.setCreatedAt(Instant.now());
        Booking saved = bookingRepository.save(b);

        R2UMessage msg = new R2UMessage();
        msg.setBookingId(saved.getId());
        msg.setUserId(saved.getUserId());
        msg.setPickup(saved.getPickup());
        msg.setDropoff(saved.getDropoff());
        msg.setTimestamp(Instant.now());

        producer.publishR2U(msg);

        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
