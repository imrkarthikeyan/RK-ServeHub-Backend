package com.karthikeyan.RK_ServeHub.controller;

import com.karthikeyan.RK_ServeHub.Repository.CustomerRepository;
import com.karthikeyan.RK_ServeHub.model.Customer;
import com.karthikeyan.RK_ServeHub.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public Customer addCustomer(@RequestBody Customer customer){
        Customer savedCustomer=customerRepository.save(customer);

        emailService.sendBookingConfirmation(customer.getEmail(), savedCustomer.getName());
        return savedCustomer;
    }

    @GetMapping
    public List<Customer> getCustomers(){
        return customerRepository.findAll();
    }
}
