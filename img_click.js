$(document).ready(function(){
    $(".img-1").click(function(e){
        e.stopPropagation();
        window.location = 'products';
    });
});