$(document).ready(function(){
    var element = $('meta[name="active-menu"]').attr('content');
    $('#' + element).addClass('active');
});

$(function () {
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50).toggleClass('navbar-light', $(this).scrollTop() > 50).toggleClass('navbar-dark', $(this).scrollTop() < 50);
    });
});