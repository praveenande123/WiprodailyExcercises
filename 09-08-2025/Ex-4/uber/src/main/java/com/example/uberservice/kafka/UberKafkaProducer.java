package com.example.uberservice.kafka;

import com.example.uberservice.dto.U2RMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UberKafkaProducer {
    private final KafkaTemplate<String, Object> kafkaTemplate;

    @Value("${uber.kafka.topic-u2r}")
    private String topicU2R;

    public void publishU2R(U2RMessage msg) {
        kafkaTemplate.send(topicU2R, msg.getBookingId().toString(), msg);
    }
}
