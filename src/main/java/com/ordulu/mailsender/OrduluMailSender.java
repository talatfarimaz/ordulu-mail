package com.ordulu.mailsender;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.ordulu.mailsender.controller"})
public class OrduluMailSender {

    public static void main(String[] args) {
        SpringApplication.run(OrduluMailSender.class, args);
    }

}
