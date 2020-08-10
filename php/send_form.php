  
<?php
$token = "1380344449:AAGfi_aQtgPqn1iFFkVwAHFxoRMwYIf8EXU"; 
$chat_id = "-1001322058435";

  $to = "matvienkoigor956@gmail.com";
  $subject = "Заявка с сайта";
  $headers = "From: flower@example.com";

    
  $name = trim($_POST["name"]);
  $phone = trim($_POST["tel"]);  
  $age = trim($_POST["age"]);  
  $email = trim($_POST["email"]);  

  $result = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Возраст: ' => $age,
    'Email: ' => $email
  ); 

  foreach($result as $key => $value) {
    $txt_for_tg .= "<b>" . $key . "</b> " . $value . "%0A";
    $txt_for_mail .= $key . $value . "\r\n";
  };

  echo '<div class="section_subtitle text-right">Спасибо!<br>Анкета успешно отправлена</div><div>Скоро мы с Вами свяжемся</div>';

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt_for_tg}","r");

  mail($to, $subject, $txt_for_mail, $headers);
?>