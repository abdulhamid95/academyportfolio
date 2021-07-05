$(window).scroll(function(){

    if($(this).scrollTop()>=200){
        $("#navbar").addClass("noTransparrent");
     }
    else{
        $("#navbar").removeClass("noTransparrent");
     }

});


$(document).ready(function(){
    $('.circle').circleProgress({
        startAngle: -Math.PI / 2,
        fill: "#0575e6"
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });
});
