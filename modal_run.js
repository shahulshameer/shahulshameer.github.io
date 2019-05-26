$(document).ready(function(){
    $(".click-me").click(function(event){
        event.stopPropagation();

        var clickButton = $(this);
       // var tab_name = clickButton.attr('tab_name_modal');
        var tab_name = clickButton.parent().children(".tablet-name").text();
        var compositions = clickButton.parent().children(".compositions").text();
        var strength = clickButton.parent().children(".strength").text();
        var img_src =  clickButton.parent().children(".imgPath").text();
        
          $("#modal-img").attr("src",img_src );
          $("#tab_name_inside_modal").html('<div class="py-2 text-center" style="font-size:1.5rem;">'+tab_name+'</div>');
          $("#tab_compositions_inside_modal").html(compositions);
          $("#tab_strength_inside_modal").text(strength);
         

          $("#update_user_modal").modal("show");

   });


});