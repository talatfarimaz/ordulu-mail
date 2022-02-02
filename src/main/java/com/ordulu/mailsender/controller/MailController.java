package com.ordulu.mailsender.controller;

import com.ordulu.mailsender.entities.ContactEntity;
import com.ordulu.mailsender.entities.JobApplicationEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.*;
import javax.mail.internet.*;
import javax.mail.util.ByteArrayDataSource;
import java.io.IOException;
import java.util.Properties;

@RestController
@RequestMapping("/api/mail")
public class MailController {
    @PostMapping("/sendcontactmail")
    public ContactEntity sendContactMail(@RequestBody ContactEntity contact) throws MessagingException {
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        String host = "mail.ordulu.com";
        javaMailSender.setHost(host);
        javaMailSender.setPort(25);
        javaMailSender.setPassword("#zQWn33M");
        javaMailSender.setUsername("orduluwebform@ordulu.com");
        Properties props = javaMailSender.getJavaMailProperties();
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", false);
        props.put("mail.smtp.timeout", 20000);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", "25");
        String content = "<div>" +
                "<label>"+contact.getNameSurname()+" isimli kullanıcı "+"</label>" +
                "<label>"+contact.getEmail()+" maili ve "+"</label>" +
                "<label>"+contact.getPhone()+" numarasıyla "+"</label>" +
                "<label>"+" yardım bekliyor."+"</label></br>" +
                "<label>"+"Mesaj: "+contact.getMessage()+"</label>"+
                "</div>";

        Session session = Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("orduluwebform@ordulu.com", "#zQWn33M");
            }
        });

        Message message = new MimeMessage(session);
        message.setFrom(new InternetAddress("orduluwebform@ordulu.com"));
        message.setRecipients(
                Message.RecipientType.TO, InternetAddress.parse("ik@ordulu.com"));
        message.setSubject(contact.getSubject());

        MimeBodyPart mimeBodyPart = new MimeBodyPart();
        mimeBodyPart.setContent(content, "text/html; charset=utf-8");

        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(mimeBodyPart);

        message.setContent(multipart);
        try {
            Transport.send(message);
            return contact;
        } catch (Exception e) {
            e.printStackTrace();
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

        String host = "mail.ordulu.com";
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        javaMailSender.setHost(host);
        javaMailSender.setPort(25);
        javaMailSender.setPassword("#zQWn33M");
        javaMailSender.setUsername("orduluwebform@ordulu.com");
        Properties props = javaMailSender.getJavaMailProperties();
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", false);
        props.put("mail.smtp.timeout", 20000);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", "25");
        String content = "<div><strong>İş Başvurusu</strong><br/>" +
                "<label>İlan: " + job+ " "+ "</label><br/>" +
                "<label>Kimden: " + name+ " "+ surname+"</label><br/>" +
                "<label>TC Kimlik No: " +identity+"</label><br/>" +
                "<label>Mail: " +email+"</label><br/>" +
                "<label>Telefon: " +phone+"</label>" +
                "</div>";

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication("orduluwebform@ordulu.com", "#zQWn33M");
                    }
                });

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress("orduluwebform@ordulu.com"));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse("ik@ordulu.com"));
            message.setSubject("İş Başvurusu");
            BodyPart messageBodyPart = new MimeBodyPart();
            messageBodyPart.setText("İs Başvurusu");
            messageBodyPart.setContent(content,"text/html; charset=utf-8");
            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(messageBodyPart);
            MimeBodyPart attachment = new MimeBodyPart();
            DataSource dataSrc = new ByteArrayDataSource(file.getBytes(), "application/pdf");
            attachment.setDataHandler(new DataHandler(dataSrc));
            attachment.setFileName(file.getOriginalFilename());
            multipart.addBodyPart(attachment);
            message.setContent(multipart);
            Transport.send(message);
            return identity;

        } catch (MessagingException | IOException e) {
            throw new RuntimeException(e);
        }

    }

    @PostMapping(value = "/sendinternappmail", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String sendInternApplicationMail(@RequestParam MultipartFile file,
                                         @RequestParam String name,
                                         @RequestParam String surname,
                                         @RequestParam String identity, @RequestParam String email, @RequestParam String phone
    ) throws IOException {

        String host = "mail.ordulu.com";
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        javaMailSender.setHost(host);
        javaMailSender.setPort(25);
        javaMailSender.setPassword("#zQWn33M");
        javaMailSender.setUsername("orduluwebform@ordulu.com");
        Properties props = javaMailSender.getJavaMailProperties();
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", false);
        props.put("mail.smtp.timeout", 20000);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", "25");
        String content = "<div><strong>Staj Başvurusu</strong><br/>" +
                "<label>Kimden: " + name+ " "+ surname+"</label><br/>" +
                "<label>TC Kimlik No: " +identity+"</label><br/>" +
                "<label>Mail: " +email+"</label><br/>" +
                "<label>Telefon: " +phone+"</label><br/>" +
                "</div>";


        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication("orduluwebform@ordulu.com", "#zQWn33M");
                    }
                });

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress("orduluwebform@ordulu.com"));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse("ik@ordulu.com"));
            message.setSubject("Staj Başvurusu");
            BodyPart messageBodyPart = new MimeBodyPart();
            messageBodyPart.setText("İş Başvurusu");
            messageBodyPart.setContent(content,"text/html; charset=utf-8");
            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(messageBodyPart);
            MimeBodyPart attachment = new MimeBodyPart();
            DataSource dataSrc = new ByteArrayDataSource(file.getBytes(), "application/pdf");
            attachment.setDataHandler(new DataHandler(dataSrc));
            attachment.setFileName(file.getOriginalFilename());
            multipart.addBodyPart(attachment);
            message.setContent(multipart);
            Transport.send(message);
            return identity;

        } catch (MessagingException | IOException e) {
            throw new RuntimeException(e);
        }


    }

    @GetMapping("/map")
    public String getMap () {
        return  "test";
    }
}
