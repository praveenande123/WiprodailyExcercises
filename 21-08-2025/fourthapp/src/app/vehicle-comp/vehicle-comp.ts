import { Component, OnInit } from '@angular/core';
import { Vehicle } from './../vehicle';
import { VehicleService } from './../vehicle-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vehicle-comp',
  imports: [CommonModule],
  templateUrl: './vehicle-comp.html',
  styleUrl: './vehicle-comp.css'
})
export class VehicleComp implements OnInit {
vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }
}