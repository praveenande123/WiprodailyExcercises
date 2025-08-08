package com.wipro.logdemo.controller;



import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;




@RestController
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@GetMapping("/greet")
	 String greet() {
	 
		
        logger.error("This is an error.");
	return "Hello";
}}