/* Plugins */

////= ../../node_modules/jquery/dist/jquery.min.js
////= ../../node_modules/popper.js/dist/umd/popper.min.js
////= ../../node_modules/bootstrap/dist/js/bootstrap.min.js
////= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

$(document).ready(function(){
    $('.carousel_how-works').slick({
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        //pauseOnDotsHover: false, // Отключает паузу при наведении на доты
        //pauseOnFocus: false,     // Отключает паузу при фокусировке на карусели
        //pauseOnHover: false, 
        autoplaySpeed: 10000,
        dots: true,
        centerMode: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              },
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });

    $('.carousel-advantages').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //pauseOnDotsHover: false, // Отключает паузу при наведении на доты
        //pauseOnFocus: false,     // Отключает паузу при фокусировке на карусели
        //pauseOnHover: false, 
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1001,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });

    $('.carousel_clients').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //pauseOnDotsHover: false, // Отключает паузу при наведении на доты
        //pauseOnFocus: false,     // Отключает паузу при фокусировке на карусели
        //pauseOnHover: false, 
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        centerMode: true,
        
    });

   

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    $('.subscription-form').submit(function(e){
        e.preventDefault(); // отключение перезагрузки страницы при отправке формы
    
        var $form = $(this);
    
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $form.serialize()
        }).done(function(){
            $form.find("input").val("");
            $form.hide();
            $('.success').show();
            console.log('ok');
    
            //document.location.href = ("http://ru.stackoverflow.com"); // редирект на thank you page
    
            $form.trigger('reset');
        });
    });

    $('.form_modal').submit(function(e){
        e.preventDefault(); // отключение перезагрузки страницы при отправке формы
    
        var $form = $(this);
    
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $form.serialize()
        }).done(function(){
            $form.find("input").val("");
            // $form.hide();
            // $('.success').show();
            $('#consultation').hide();
            $('#thanks').show();
            console.log('ok');
            //document.location.href = ("http://ru.stackoverflow.com"); // редирект на thank you page
            $form.trigger('reset');
        });
    });


    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu_button', '.burger-menu_lines');
        let links = menu.find('.burger-menu_link');
        let overlay = menu.find('.burger-menu_overlay');
        
        button.on('click', (e) => {
          e.preventDefault();
          toggleMenu();
        });
        
        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());
        
        function toggleMenu(){
          menu.toggleClass('burger-menu_active');
          
          if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
          } else {
            $('body').css('overflow', 'visible');
          }
        }
      }
      
      burgerMenu('.burger-menu');   


      //Modal
        const buttonWriteToUs = document.querySelectorAll('.btn-write'),
        buttonOrder = document.querySelectorAll('.button-little'),
        modalConsultation = document.querySelectorAll('#consultation')[0],
        modalOrder = document.querySelectorAll('#order')[0],
        overlay = document.querySelectorAll('.overlay')[0],
        modalClose = document.querySelectorAll('.modal__close'),
        html = document.querySelectorAll('html')[0],
        modalThanks = document.querySelectorAll('#thanks')[0];

        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        buttonWriteToUs.forEach(function(item) {
            item.addEventListener('click', function() {
                overlay.style.display = "block";
                modalConsultation.style.display = "block";
                modalThanks.style.display = "none";
                document.body.classList.add('no-scroll');
                document.body.style.paddingRight = scrollBarWidth + 'px';
            });
        });

        buttonOrder.forEach(function(item) {
            item.addEventListener('click', function() {
                overlay.style.display = "block";
                modalOrder.style.display = "block";
                html.style.overflow = "hidden";
                modalThanks.style.display = "none";
            });
        });

        modalClose.forEach(function(item) {
            item.addEventListener('click', function() {
                overlay.style.display = "none";
                // modalOrder.style.display = "none";
                html.style.overflow = "visible";
                document.body.classList.remove('no-scroll');
                document.body.style.paddingRight = '0';
                console.log('111');
            });
        });

        overlay.addEventListener('click', function() {
            modalConsultation.style.display = 'none';
            overlay.style.display = 'none';
            html.style.overflow = "visible";
            document.body.classList.remove('no-scroll');
            document.body.style.paddingRight = '0';
            
        });

        modalConsultation.addEventListener('click', function(event) {
            event.stopPropagation();
        });

        modalThanks.addEventListener('click', function(event) {
            event.stopPropagation();
        });
  });

  

 
