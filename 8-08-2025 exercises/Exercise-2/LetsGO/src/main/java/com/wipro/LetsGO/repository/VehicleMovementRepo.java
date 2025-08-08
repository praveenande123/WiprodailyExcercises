package com.wipro.LetsGO.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.LetsGO.entity.VehicleMovement;

public interface VehicleMovementRepo extends JpaRepository<VehicleMovement, Long> {

}
