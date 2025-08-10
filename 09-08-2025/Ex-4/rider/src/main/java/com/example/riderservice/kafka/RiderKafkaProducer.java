package com.example.riderservice.kafka;

import com.example.riderservice.dto.R2UMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RiderKafkaProducer {
    private final KafkaTemplate<String, String> kafkaTemplate;
    public RiderKafkaProducer(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    @Value("${rider.kafka.topic-r2u}")
    private String topicR2U;

    public void publishR2U(R2UMessage msg) {
        kafkaTemplate.send(topicR2U, msg.getBookingId().toString());
    }
}
