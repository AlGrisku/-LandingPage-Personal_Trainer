<?php

$message_sent = false;

if(isset($_POST['email']) && $_POST['email'] != ''){

    if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

        // submit the form
        $userEmail = $_POST['email'];

        /*
            Change 'youremail@gmail.com' to your email adress
        */
        $to = "youremail@gmail.com";
        $subject = "Newsletter Subscription";
        $body = "";
    
        $body .= "This Email: " .$userEmail. "\r\n";
        $body .= "Wants to suscribe to your newsletter";
    
        mail($to, $subject, $body);

        $message_sent = true;

    }

}

?>