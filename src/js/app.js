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
        autoplaySpeed: 10000000,
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
        autoplaySpeed: 100000,
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
        autoplaySpeed: 100000,
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
      

  

  });

  

 
