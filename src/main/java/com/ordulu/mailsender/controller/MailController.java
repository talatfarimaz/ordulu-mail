package com.ordulu.mailsender.controller;

import com.ordulu.mailsender.entities.ContactEntity;
import com.ordulu.mailsender.entities.JobApplicationEntity;
import org.springframework.http.MediaType;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.activation.DataSource;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.util.Properties;

@RestController
@RequestMapping("/api/mail")
public class MailController {
    @PostMapping("/sendcontactmail")
    public ContactEntity sendContactMail(@RequestBody ContactEntity contact, RedirectAttributes redirectAttributes) {
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        String host = "mail.ordulu.com";
        javaMailSender.setHost(host);
        javaMailSender.setPort(25);
        javaMailSender.setPassword("#zQWn33M");
        javaMailSender.setUsername("orduluwebform@ordulu.com");
        Properties props = javaMailSender.getJavaMailProperties();
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", false);
        props.put("mail.smtp.timeout", 1000);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.transport.protocol", "smtp");
        String content = "<div>" +
                "<label>"+contact.getNameSurname()+" isimli kullanıcı"+"</label>" +
                "<label>"+contact.getEmail()+" maili ve "+"</label>" +
                "<label>"+contact.getPhone()+" numarasıyla "+"</label>" +
                "<label>"+contact.getMessage()+" konusunda yardım bekliyor."+"</label>" +
                "</div>";
        MimeMessagePreparator mimeMessagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, "UTF-8");
            messageHelper.setFrom("orduluwebform@ordulu.com");
            messageHelper.setTo("ik@ordulu.com");
            messageHelper.setSubject(contact.getSubject());
            messageHelper.setText(content, true);
        };
        try {
            javaMailSender.send(mimeMessagePreparator);
            return contact;
        } catch (MailException e) {
            throw e;
        }
    }

    @PostMapping(value = "/sendjobappmail", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String sendJobApplicationMail(@RequestParam MultipartFile file,
                                       @RequestParam String name,
                                       @RequestParam String surname,
                                       @RequestParam String identity,
                                         @RequestParam String email,
                                         @RequestParam String phone,
                                         @RequestParam String job
    ) {
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        String host = "mail.ordulu.com";
        javaMailSender.setHost(host);
        javaMailSender.setPort(25);
        javaMailSender.setPassword("#zQWn33M");
        javaMailSender.setUsername("orduluwebform@ordulu.com");
        Properties props = javaMailSender.getJavaMailProperties();
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", false);
        props.put("mail.smtp.timeout", 1000);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.transport.protocol", "smtp");
        String content = "<div><strong>İş Başvurusu</strong><br/>" +
                "<label>İlan: " + job+ " "+ "</label><br/>" +
                "<label>Kimden: " + name+ " "+ surname+"</label><br/>" +
                "<label>TC Kimlik No: " +identity+"</label><br/>" +
                "<label>Mail: " +email+"</label><br/>" +
                "<label>Telefon: " +phone+"</label>" +
                "</div>";
        MimeBodyPart attachPart = new MimeBodyPart();
        try {
            attachPart.setContent(file.getBytes(), file.getContentType());
        } catch (MessagingException | IOException e) {
            e.printStackTrace();
        }
        try {
            attachPart.setFileName(file.getOriginalFilename());
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        try {
            attachPart.setDisposition(Part.ATTACHMENT);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        MimeMessagePreparator mimeMessagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, "UTF-8");
            messageHelper.setFrom("orduluwebform@ordulu.com");
            messageHelper.setTo("ik@ordulu.com");
            messageHelper.setSubject("subject");
            messageHelper.setText(content, true);
            messageHelper.addAttachment("fileName", (DataSource) attachPart);

        };
        try {
            javaMailSender.send(mimeMessagePreparator);
            return identity;
        } catch (MailException e) {
            throw e;
        }
    }

    @PostMapping(value = "/sendinternappmail", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String sendInternApplicationMail(@RequestParam MultipartFile file,
                                         @RequestParam String name,
                                         @RequestParam String surname,
                                         @RequestParam String identity, @RequestParam String email, @RequestParam String phone
    ) throws IOException {
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        String host = "mail.ordulu.com";
        javaMailSender.setHost(host);
        javaMailSender.setPort(25);
        javaMailSender.setPassword("#zQWn33M");
        javaMailSender.setUsername("orduluwebform@ordulu.com");
        Properties props = javaMailSender.getJavaMailProperties();
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", false);
        props.put("mail.smtp.timeout", 1000);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.transport.protocol", "smtp");
        String content = "<div><strong>Staj Başvurusu</strong><br/>" +
                "<label>Kimden: " + name+ " "+ surname+"</label><br/>" +
                "<label>TC Kimlik No: " +identity+"</label><br/>" +
                "<label>Mail: " +email+"</label><br/>" +
                "<label>Telefon: " +phone+"</label><br/>" +
                "</div>";
        MimeBodyPart attachPart = new MimeBodyPart();
        try {
            attachPart.setContent(file.getBytes(), file.getContentType());
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        try {
            attachPart.setFileName(file.getOriginalFilename());
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        try {
            attachPart.setDisposition(Part.ATTACHMENT);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        MimeMessagePreparator mimeMessagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, "UTF-8");
            messageHelper.setFrom("orduluwebform@ordulu.com");
            messageHelper.setTo("ik@ordulu.com");
            messageHelper.setSubject("subject");
            messageHelper.setText(content, true);
            messageHelper.addAttachment("fileName", (DataSource) attachPart);
        };
        try {
            javaMailSender.send(mimeMessagePreparator);
            return identity;
        } catch (MailException e) {
            throw e;
        }
    }

    @GetMapping("/map")
    public String getMap () {
        return  "test";
    }
}
