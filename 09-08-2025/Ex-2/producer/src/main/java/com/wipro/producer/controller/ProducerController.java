package com.wipro.producer.controller;

import com.wipro.producer.service.ProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/kafka")
public class ProducerController {

    @Autowired
    private ProducerService producerService;

    // Send message by passing code and value in JSON
    @PostMapping("/publish")
    public String sendMessage(@RequestParam String subjectCode, @RequestParam String subjectValue) {
        producerService.sendMessage(subjectCode, subjectValue);
        return "Message sent successfully!";
    }
}
