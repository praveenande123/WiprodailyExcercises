package com.example.uberservice.repo;

import com.example.uberservice.domain.RideAssignment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RideAssignmentRepository extends JpaRepository<RideAssignment, Long> {
    Optional<RideAssignment> findByBookingId(Long bookingId);
}
