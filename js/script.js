$(document).ready(function() {

    $(".nav_link").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });

    // variables
    var ajax_form = $('#ajax_form');
    var form_box = $('#form_box');

    ajax_form.submit(function() {
        $.post(
            'php/send_form.php', // адрес обработчика
            ajax_form.serialize(), // отправляемые данные          

            function(msg) { // получен ответ сервера  
                form_box.animate({
                    left: 1000,
                    opacity: 0
                }, 500);
                form_box.parent().css('background-position', '0 0');


                setTimeout(function() {
                    form_box.html(msg).animate({
                        left: 0,
                        opacity: 1
                    }, 500);
                    form_box.parent().css('background-position', '100% 0');

                }, 500);
            }
        );
        return false;

    });
});






// function sendAjaxForm(ajax_form, url) {
//     var ajax_form = $('#' + ajax_form);
//     var form_box = $('.form_box');

//     ajax_form.submit(function() {
//         $.ajax({
//             url: url,
//             type: "POST",
//             dataType: "html",
//             data: ajax_form.serialize(),
//             success: function(response) {
//                 result = $.parseJSON(response);
//                 // $('#' + ajax_form).hide();
//                 alert(resalt);
//                 //--------------
//                 // form_box.animate({
//                 //     left: 1000,
//                 //     opacity: 0
//                 // }, 500);

//                 // $('.form_wrap').css('background-position', '0 0');

//                 // setTimeout(function() {
//                 //     form_box.html('<div class="section_subtitle text-right">Спасибо!<br>Анкета успешно отправлена</div><div>Скоро мы с Вами свяжемся</div>').animate({
//                 //         left: 500,
//                 //         opacity: 1
//                 //     }, 500);
//                 // }, 500);
//                 //---------------
//             },
//             error: function(response) {
//                 form_box.html(response);
//             }
//         });
//         return false;
//     })

// }