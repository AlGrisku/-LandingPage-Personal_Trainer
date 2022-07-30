<?php

$message_sent = false;

if((isset($_POST['email']) && $_POST['email'] != '') && (isset($_POST['name']) && $_POST['name'] != '')){

    if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

        // submit the form
        $userName = $_POST['name'];
        $userEmail = $_POST['email'];
        $userMessage = $_POST['message'];

        /*
            Change 'youremail@gmail.com' to your email adress
        */
        $to = "youremail@gmail.com";
        $subject = "New contact form from website";

        $body = "Name:" .$userNamerN. "\r\n";
        $body .= "Email: " .$userEmail. "\r\n";
        $body .= "Sent the following message: \r\n";
        $body .= $userMessage;
    
        mail($to, $subject, $body);

        $message_sent = true;

    }

}

?>