$(document).ready(function(){
    var element = $('meta[name="active-menu"]').attr('content');
    $('#' + element).addClass('active');
});

$(function () {
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 25).toggleClass('navbar-light', $(this).scrollTop() > 25).toggleClass('navbar-dark', $(this).scrollTop() < 25);
    });
});