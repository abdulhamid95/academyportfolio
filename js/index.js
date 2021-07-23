$(window).scroll(function(){

  // إضافة الصنف noTransparrent عند النزول بالصفحة إلى أكثر من 200 بيكسل

  if($(this).scrollTop()>=200){
      $("#navbar").addClass("noTransparrent");
   }
  else{
      $("#navbar").removeClass("noTransparrent");
   }

});

$(document).ready(function(){

    // سحب عملية الإنتقال في الصفحة 90 بيكسل عند الضغط على عناصر قائمة التنقل
  $("a.nav-link").on('click', function(event) {

      var hash = this.hash;

      $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 200, function(){});
  
  });

  // تعين دوائر النسب في الصفحة
  $('.circle').circleProgress({
      startAngle: -Math.PI / 2,
      fill: "#0575e6"
  }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('span').html(Math.round(stepValue * 100) + '%');
  });
  
  // مكتبة التحقق
  $(function () {
      $("#commentForm").validate();
  });

});