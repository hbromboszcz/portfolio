document.querySelector(".burger-menu").addEventListener("click", function(){
    document.querySelector(".burger-menu").classList.toggle("xified");
document.body.classList.toggle("overflown");
    document.querySelector(".mobile-nav").classList.toggle("shown");
});

setTimeout(function() {
    document.querySelector(".preloader").classList.add("hidden");
}, 2000);


jQuery(document).ready(function(){
   $('#h2f').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/3);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/3);
     $('#h2f').css('text-shadow', +rYP/10+'px '+rXP/100+'px rgba(247,134,188,.8), '+rYP/10+'px '+rXP/100+'px rgba(247,246,245,1)');
   });   
});

jQuery(document).ready(function(){
   $('#h2p').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/3);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/3);
     $('#h2p').css('text-shadow', +rYP/10+'px '+rXP/100+'px rgba(247,246,245,1)');
   }); 
});



jQuery(document).ready(function(){
   $('#h2d').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/3);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/3);
     $('#h2d').css('text-shadow', +rYP/10+'px '+rXP/100+'px rgba(255,115,13,.8)');
   }); 
});



jQuery(document).ready(function(){
   $('#h2d1').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/3);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/3);
     $('#h2d1').css('text-shadow', +rYP/10+'px '+rXP/100+'px rgba(247,246,245,0.8)');
   }); 
});




jQuery(document).ready(function(){
   $('#h2-about').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/3);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/3);
     $('#h2-about').css('text-shadow', +rYP/10+'px '+rXP/100+'px rgba(247,201,0,0.8)');
   }); 
});


jQuery(document).ready(function(){
   $('#h2-contact').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/3);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/3);
     $('#h2-contact').css('text-shadow', +rYP/10+'px '+rXP/100+'px rgba(33,89,12,0.8)');
   }); 

});








