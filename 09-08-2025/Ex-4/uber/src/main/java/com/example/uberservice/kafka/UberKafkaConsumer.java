package com.example.uberservice.kafka;
import com.example.uberservice.dto;

import com.example.uberservice.dto.R2UMessage;
import com.example.uberservice.dto.U2RMessage;
import com.example.uberservice.domain.RideAssignment;
import com.example.uberservice.repo.RideAssignmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
public class UberKafkaConsumer {
    private final RideAssignmentRepository repo;
    private final UberKafkaProducer producer;

    @KafkaListener(topics = "${uber.kafka.topic-r2u}", groupId = "${uber.kafka.group-id}")
    public void consumeR2U(R2UMessage msg) {
        boolean driverFound = Math.random() > 0.2;
        U2RMessage response = new U2RMessage();
        response.setBookingId(msg.getBookingId());
        if (driverFound) {
            String driverId = "driver-" + ThreadLocalRandom.current().nextInt(1000);
            RideAssignment a = new RideAssignment();
            a.setBookingId(msg.getBookingId());
            a.setDriverId(driverId);
            a.setStatus("ASSIGNED");
            a.setAssignedAt(Instant.now());
            repo.save(a);

            response.setStatus("ASSIGNED");
            response.setDriverId(driverId);
            response.setEtaSeconds(120);
        } else {
            response.setStatus("REJECTED");
        }

        producer.publishU2R(response);
    }
}
