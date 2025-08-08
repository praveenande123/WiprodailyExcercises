package com.wipro.LetsGO.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "vehicle_movement")
public class VehicleMovement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int vehId;
    private double lat;
    private double lon;

    private LocalDateTime timestamp;

    @PrePersist
    public void onCreate() {
        timestamp = LocalDateTime.now();
    }

    // ✅ Default constructor for JPA
    public VehicleMovement() {
    }

    // Parameterized constructor (optional)
    public VehicleMovement(Long id, int vehId, double lat, double lon, LocalDateTime timestamp) {
        this.id = id;
        this.vehId = vehId;
        this.lat = lat;
        this.lon = lon;
        this.timestamp = timestamp;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public int getVehId() { return vehId; }
    public void setVehId(int vehId) { this.vehId = vehId; }

    public double getLat() { return lat; }
    public void setLat(double lat) { this.lat = lat; }

    public double getLon() { return lon; }
    public void setLon(double lon) { this.lon = lon; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
}
