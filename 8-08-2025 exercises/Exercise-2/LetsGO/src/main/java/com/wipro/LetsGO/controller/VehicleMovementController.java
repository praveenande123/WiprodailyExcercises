package com.wipro.LetsGO.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.wipro.LetsGO.repository.VehicleMovementRepo;
import com.wipro.LetsGO.entity.VehicleMovement;

@RestController
@RequestMapping("/move")
public class VehicleMovementController {

	@Autowired
    private VehicleMovementRepo repository;

    @PostMapping
    public String saveMovement(@RequestBody VehicleMovement movement) {
        repository.save(movement);
        return "Vehicle movement saved successfully!";
    }
    @GetMapping
    public List<VehicleMovement> getAllMovements() {
        return repository.findAll();
    }
    
}
