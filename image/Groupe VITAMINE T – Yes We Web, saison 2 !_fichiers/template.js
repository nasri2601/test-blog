jQuery(document).ready(function($){
   
    $('.presta-icons-spacer').css({
        'width': $(window).width(),
        'margin-left': -($(window).width() / 2)
    });
    
   $('img').each(function() {
      $(this).attr('src', $(this).attr('src').replace('/v2018', '')); 
   });
    
});