/* global $ */ 

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$('.toggle-btn').click(function(e){
    if($('.nav-left-side').hasClass('show')) {
        $('.nav-left-side').collapse('hide');
    } else {
        $('.nav-left-side').collapse('show');
    }
});




