$(function(){
   $(".down").click(function(){
       var Idx = $(this).parent().index();     
       var length = Idx * 150;
       $(".elevator").css("top",length);
       $(".down").eq(Idx).addClass("active");
       setTimeout(function(){
           $(".left,.right").css("width",0);
           
       },1000);
       setTimeout(function(){
           $(".left,.right").css("width",150);
           $(".down").removeClass("active");
       },5000);
   }) ;
    $(".up").click(function(){
       var Idx = $(this).parent().index();     
       var length = Idx * 150;
       $(".elevator").css("top",length);
      $(".up").eq(Idx).addClass("active");
       setTimeout(function(){
           $(".left,.right").css("width",0);
           
       },1000);
       setTimeout(function(){
           $(".left,.right").css("width",150);
           $(".up").removeClass("active");
       },5000);
   }) ;
});