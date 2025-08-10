package com.example.riderservice.kafka;

import com.example.riderservice.dto.U2RMessage;
import com.example.riderservice.repo.BookingRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
@EnableJpaRepositories(basePackages = "com.example.riderservice.repo")
@EntityScan(basePackages = "com.example.riderservice.entity")

@Service
@RequiredArgsConstructor
public class RiderKafkaConsumer {
    private final BookingRepository bookingRepository;
    public RiderKafkaConsumer(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @KafkaListener(topics = "${rider.kafka.topic-u2r}", groupId = "${rider.kafka.group-id}")
    public void consumeU2R(U2RMessage msg) {
        bookingRepository.findById(msg.getBookingId()).ifPresent(b -> {
            b.setStatus(msg.getStatus());
            bookingRepository.save(b);
        });
    }
}
