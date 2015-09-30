// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//pdf viewer
(function(a){a.createModal=function(b){
  defaults={title:"",
  scrollable:false
};
  var b=a.extend({},defaults,b);
  var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";
  html='<div class="modal fade" id="myModal">';
  html+='<div class="modal-dialog">';
  html+='<div class="modal-content">';
  if(b.title.length>0){
    html+='<h4 class="modal-title">'+b.title+"</h4>"
  }
  html+='<div class="modal-body" '+c+">";
  html+=b.message;html+="</div>";
    a("body").prepend(html);
    a("#myModal").modal().on("hidden.bs.modal",
    function(){
      a(this).remove()}
    )}})(jQuery);

$(function() {
  $('.view-pdf').on('click',function() {
    var pdf_link = $(this).attr('href');
    var iframe = '<object type="application/pdf" data="'+pdf_link+'" width="100%" height="700"></object>'
    $.createModal({
        message: iframe,
        scrollable: false
    });
    return false;
  });
})

//tooltip hover
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68260011-1', 'auto');
ga('send', 'pageview');
