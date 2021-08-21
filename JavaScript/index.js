$(document).ready(function(){

    $('.fa-hamburger').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
        $('.fa-hamburger').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

    $('.controlsss .dots').click(function(){

        $(this).addClass('dot-active').siblings().removeClass('dot-active');
    });

    $('.dot1').click(function(){
        $('.vid1').css('display','block');
        $('.vid2').css('display','none');
        $('.vid3').css('display','none');
    });

    $('.dot2').click(function(){
        $('.vid2').css('display','block');
        $('.vid1').css('display','none');
        $('.vid3').css('display','none');
    });

    $('.dot3').click(function(){
        $('.vid3').css('display','block');
        $('.vid1').css('display','none');
        $('.vid2').css('display','none');
    });

    $(window).on('scroll load',function(){
        if($(window).scrollTop() > 10){
            $('#header').addClass('header-active');
        }else{
            $('#header').removeClass('header-active');
        }
    });

     // dish section 
    $('.controls .buttons').click(function(){

        $(this).addClass('button-active').siblings().removeClass('button-active');

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.dish .image').show(400);
        }else{
            $('.dish .image').not('.'+filter).hide(200);
            $('.dish .image').filter('.'+filter).show(400);
        }

    });

    window.onscroll = () =>{
      
        if(window.scrollY > 60){
          document.querySelector('#scroll-top').classList.add('active');
        }else{
          document.querySelector('#scroll-top').classList.remove('active');
        } 
    }

    function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
    }
    
    function fadeOut(){
    setInterval(loader, 3000);
    }
    
    window.onload = fadeOut();

});
