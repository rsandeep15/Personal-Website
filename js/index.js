$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 0});
  $("#navigator a").on('click', function(event){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - $("#navigator").height()
      }, 600, function(){
        window.location.hash = hash;
      });
    }
  })
});
