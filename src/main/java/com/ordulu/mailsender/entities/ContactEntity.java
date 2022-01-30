package com.ordulu.mailsender.entities;

import lombok.Data;

@Data
public class ContactEntity {
    private String nameSurname;
    private String email;
    private String phone;
    private String subject;
    private String message;
}
