package com.wipro.producer.service;

import com.wipro.model.Subject;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class ProducerService {

    private static final String TOPIC = "learn-subject";

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;
   
        
        

    public void sendMessage(String subjectCode, String subjectValue) {
    	Subject subject = new Subject();
        subject.setSubjectCode(subjectCode);
        subject.setSubjectValue(subjectValue);
    
        kafkaTemplate.send(TOPIC, subject);
        System.out.println("📤 Sent: " + subject);
    }
}
