package com.wipro.user_service.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.user_service.entity.User;
import com.wipro.user_service.security.JwtUtil;
import com.wipro.user_service.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
  private final UserService svc;
  private final JwtUtil jwt;

  public UserController(UserService svc, JwtUtil jwt) { this.svc=svc; this.jwt=jwt; }

  @PostMapping("/register")
  public ResponseEntity<User> register(@RequestBody User u) {
    return ResponseEntity.ok(svc.register(u));
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody Map<String,String> body) {
    var user = svc.findByUsername(body.get("username"))
                  .orElseThrow(() -> new RuntimeException("Bad credentials"));
    if(!new BCryptPasswordEncoder().matches(body.get("password"), user.getPassword()))
      return ResponseEntity.status(401).body("Invalid credentials");

    return ResponseEntity.ok(Map.of("token", jwt.generateToken(user)));
  }

  @GetMapping
  public List<User> list(){ return svc.allUsers(); }
}
