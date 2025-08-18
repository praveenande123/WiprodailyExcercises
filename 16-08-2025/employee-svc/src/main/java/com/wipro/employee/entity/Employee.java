package com.wipro.employee.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Employee {
    @Id
    private Long id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "Contract type is mandatory")
    private String contract;
    @NotBlank(message = "Address is mandatory")
    private String address;
    @NotBlank(message = "Department is mandatory")
    private String department;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getContract() { return contract; }
    public void setContract(String contract) { this.contract = contract; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
}