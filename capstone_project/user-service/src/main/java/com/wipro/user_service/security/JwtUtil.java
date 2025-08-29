package com.wipro.user_service.security;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import com.wipro.user_service.entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
  private final String secret = "replace-with-32-char-minimum-secret";
  private final Key key = Keys.hmacShaKeyFor(secret.getBytes());
  private final long validity = 1000 * 60 * 60; // 1h

  public String generateToken(User u) {
    return Jwts.builder()
        .setSubject(u.getUsername())
        .claim("role", u.getRole())
        .claim("userId", u.getId())
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis()+validity))
        .signWith(key).compact();
  }

  public Claims validateToken(String token) {
    return Jwts.parserBuilder().setSigningKey(key).build()
        .parseClaimsJws(token).getBody();
  }
}
