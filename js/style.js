// JavaScript Document

//================================= 
//			版面相關設定
//=================================

$(function(){
	$('#loading').fadeTo(600,0,function(){
		$('#loading').remove();
	})
	$('.main').css({marginTop:$('.top').height()})
	  $(".mobileMenu").click(function(){
		$(".top").toggleClass("openMenu");
	})
	$('.up').click(function(){	
		$('body,html').stop().animate({scrollTop:0});
		})
		
	var nowY = $(window).scrollTop();	
	//顯示與隱藏
	if(nowY > 100){
		$('.up').fadeIn();
		//
	}else{
		$('.up').fadeOut();
		//
	}	

})	

//----------------------------------------------------
$(window).scroll(function(){	

	nowY = $(window).scrollTop();	
	//顯示與隱藏
	if(nowY > 100){
		$('.up').stop().fadeIn();
		if($(window).width()>1100){
			$('.top').addClass('short')
			$('.main').css({marginTop:$('.top').height()})
		}else{
			$('.top').removeClass('short')
			$('.main').css({marginTop:$('.top').height()})
		}
	}else{
		$('.up').stop().fadeOut();		
		$('.top').removeClass('short')
		$('.main').css({marginTop:$('.top').height()})
	}	
	
	
	


})

//----------------------------------------------------

$(window).load(function(){	
	
})

//----------------------------------------------------

$(window).resize(function(){
	
	nowY = $(window).scrollTop();	
	if($(window).width()>1100){
		if(nowY > 100){
			$('.top').addClass('short')
		}else{
			$('.top').removeClass('short')
		}
	}else{
		$('.top').removeClass('short')
	}
	$('.main').css({marginTop:$('.top').height()})
});