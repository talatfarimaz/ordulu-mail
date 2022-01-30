package com.ordulu.mailsender.entities;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class JobApplicationEntity {
    private MultipartFile file;
}
