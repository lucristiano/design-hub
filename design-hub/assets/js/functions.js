$(document).ready(function(){
    var open = false;

    $('.nav-icon').click(function(){
        open = !open;
        
        if(open) {
        $(this).attr('src', '{{ site.url }}/../assets/img/nav-close.svg');
        } else {
        $(this).attr('src', '{{ site.url }}/../assets/img/nav.svg');
        }
    });
});
