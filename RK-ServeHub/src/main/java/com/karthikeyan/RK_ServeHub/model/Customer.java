package com.karthikeyan.RK_ServeHub.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String datetime;
    private String peoplecount;
    private String request;

    public Customer() {
    }

    public Customer(Long id, String name, String email, String datetime, String peoplecount, String request) {
        this.id = id;
        this.name=name;
        this.email=email;
        this.datetime=datetime;
        this.peoplecount=peoplecount;
        this.request=request;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public String getPeoplecount() {
        return peoplecount;
    }

    public void setPeoplecount(String peoplecount) {
        this.peoplecount = peoplecount;
    }

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }
}
