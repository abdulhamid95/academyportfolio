// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("navbar").classList.add("noTransparrent")
    } else {
      document.getElementById("navbar").classList.remove("noTransparrent")
    }
  }

  $(window).scroll(function(){

    if($(this).scrollTop()>=200){
        $("#navBar").addClass("noTransparrent");
     }
    else{
        $("#navBar").removeClass("noTransparrent");
     }

});

$(document).ready(function(){
    $("a.scroll").on('click', function(event) {

        var hash = this.hash;

        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function(){});
    
    });

    $('.circle').circleProgress({
        startAngle: -Math.PI / 2,
        fill: "#0575e6"
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });

});

