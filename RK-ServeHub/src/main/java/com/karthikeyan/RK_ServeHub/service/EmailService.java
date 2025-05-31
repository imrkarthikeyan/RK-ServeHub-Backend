package com.karthikeyan.RK_ServeHub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendBookingConfirmation(String toEmail, String name) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Booking Confirmation - RK ServeHub");
        message.setText("Hi " + name + ",\n\nThank you for your reservation!\n\nWe look forward to serving you.\n\nRK ServeHub Team");
        message.setFrom("your_email@gmail.com");

        mailSender.send(message);
    }
}
