// $('.wrapper').addClass("loaded");

// $('.icon-menu').click(function(event){
//    $(this).toggleClass('active');
//    $('.menu__body').toggleClass('active');
//    $('body').toggleClass('lock');
// });

let menuBtn = document.querySelector('.icon-menu'); // сюди вписуєш назву класу на який натискатимеш для виклику меню
let menu = document.querySelector('.menu'); // а сюди назву класу самого меню
menuBtn.addEventListener('click', function(){
   menu.classList.toggle('active');
})