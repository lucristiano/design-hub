$(document).ready(function(){
    var open = false;

    $('.nav-icon').click(function(){
        open = !open;
        
        if(open) {
        $(this).attr('src', '/assets/img/nav-close.svg');
        } else {
        $(this).attr('src', '/assets/img/nav.svg');
        }
    });

    $('#post .nav-icon').click(function(){
        open = !open;
        
        if(open) {
        $(this).attr('src', '/assets/img/nav-closewhite.svg');
        } else {
        $(this).attr('src', '/assets/img/navwhite.svg');
        }
    });
});
