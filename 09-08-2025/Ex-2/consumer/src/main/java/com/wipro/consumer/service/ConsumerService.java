package com.wipro.consumer.service;

import com.wipro.model.Subject;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class ConsumerService {

    @KafkaListener(topics = "learn-subject", groupId = "group1")
    public void consume(Subject subject) {
        System.out.println("📥 Received: " + subject);
    }
}
