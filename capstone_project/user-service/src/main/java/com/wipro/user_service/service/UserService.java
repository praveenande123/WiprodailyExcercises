package com.wipro.user_service.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.wipro.user_service.entity.User;
import com.wipro.user_service.repository.UserRepository;

@Service
public class UserService {
  private final UserRepository repo;
  private final PasswordEncoder encoder;

  public UserService(UserRepository repo, PasswordEncoder encoder) {
    this.repo = repo; this.encoder = encoder;
  }

  public User register(User u) {
    u.setPassword(encoder.encode(u.getPassword()));
    return repo.save(u);
  }

  public Optional<User> findByUsername(String username) {
    return repo.findByUsername(username);
  }

  public List<User> allUsers() { return repo.findAll(); }
}

