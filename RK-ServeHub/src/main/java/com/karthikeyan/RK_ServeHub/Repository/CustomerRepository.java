package com.karthikeyan.RK_ServeHub.Repository;

import com.karthikeyan.RK_ServeHub.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
