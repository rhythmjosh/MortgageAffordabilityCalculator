$(document).ready(function(){
    //Change setting when window width reduces certain px.
   if(window.innerWidth <= 900 && window.innerWidth > 700){
       $("#input_wrapper").css("margin":"0 auto","width":"80%");
      $("#houseImage").css("display","none");
    }
    else if(window.innerWidth <= 700){
       $("#input_wrapper").css("margin":"0 auto","width":"90%");
       $("#houseImage").css("display","none");
   }
});

$(document).ready(function(){
    //Show results when button clicked. Hide image and button on clicking
    $("#button").click(function(){
        $("#result").show(500);
        $("#houseImage").hide();
        $("#button").hide();
    });
});