package com.wipro.employee.controller;

import com.wipro.employee.entity.Employee;
import com.wipro.employee.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

   
    @GetMapping
    public String listEmployees(Model model,
                                @RequestParam(value = "keyword", required = false) String keyword) {
        List<Employee> employees = (keyword == null || keyword.isEmpty())
                ? service.getAllEmployees()
                : service.searchEmployees(keyword);
        model.addAttribute("employees", employees);
        model.addAttribute("keyword", keyword);
        return "employee_list";
    }

 
    @GetMapping("/new")
    public String showNewEmployeeForm(Model model) {
        model.addAttribute("employee", new Employee());
        return "employee_form";
    }

  
    @PostMapping
    public String saveEmployee(@Valid @ModelAttribute("employee") Employee employee,
                               BindingResult result) {
        if (result.hasErrors()) {
            return "employee_form";
        }
        service.saveEmployee(employee);
        return "redirect:/employees";
    }

   
    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        Employee employee = service.getEmployeeById(id);
        model.addAttribute("employee", employee);
        return "employee_form";
    }

  
    @PostMapping("/update/{id}")
    public String updateEmployee(@PathVariable Long id,
                                 @Valid @ModelAttribute("employee") Employee employee,
                                 BindingResult result) {
        if (result.hasErrors()) {
            return "employee_form";
        }
        service.updateEmployee(id, employee);
        return "redirect:/employees";
    }

    
    @GetMapping("/delete/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        service.deleteEmployee(id);
        return "redirect:/employees";
    }

  
    @GetMapping("/search")
    public String searchEmployee(@RequestParam("keyword") String keyword, Model model) {
        List<Employee> employees = service.searchEmployees(keyword);
        model.addAttribute("employees", employees);
        model.addAttribute("keyword", keyword);
        return "employee_list";
    }
}
