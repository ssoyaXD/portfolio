$(document).ready(function(){

	//기본값으로 돌아가라.
	$('html.body').stop().animate({'scrollTop':0},1500)


//실행문

//윈도우를 열자마자 높이값을 맞춰라.
var ht = $(window).height()
$('section').height(ht);

//화면이 리사이즈 되었을때 높이값을 맞춰라.
$(window).resize(function(){
	var ht = $(window).height();
	$('section').height(ht);
});
//화면에서 마우스가 움직일때 이미지가 움직여라

$(window).mousemove(function(e){

	//변수 posX에 마우스 커서의 x축 위치 저장
		var posX= e.pageX;
		//변수 posY에 마우스 커서의 y축 위치 저장
		var posY= e.pageY;
		
	
		//첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p11").css({"right":20-(posX/30) , "bottom":20-(posY/30) });
		$(".p12").css({"right":130+(posX/20) , "bottom":-40+(posY/20) });
		$(".p13").css({"right":60+(posX/20) , "top":180+(posY/20) });		
	
		//두 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p21").css({"right":-180-(posX/30) , "bottom":-480-(posY/30) });
		$(".p22").css({"right":130+(posX/50) , "bottom":-40+(posY/50) });
		
		//세 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p31").css({"right":280-(posX/30) , "bottom":30-(posY/30) });
		$(".p32").css({"right":110+(posX/20) , "bottom":-270+(posY/20) });
		$(".p33").css({"right":-70+(posX/20) , "bottom":-130+(posY/20) });	
		
		//네 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p41").css({"right":20-(posX/30) , "bottom":-120-(posY/30) });
		$(".p42").css({"right":0+(posX/20) , "bottom":-180+(posY/20) });	
});


//메뉴버튼클릭시 
$('#menu li').click(function(e){
	e.preventDefault()

 //높이값을 확인한다.
 var ht = $(window).height();
 var i  = $(this).index()
 var top = ht*i
 $('h1').text(top)

 $('html,body').stop().animate({'scrollTop':top},1400);
 $('#menu li').removeClass('on')
 $(this).addClass('on')

});

$(window).scroll(function(){

	var tt= $(this).scrollTop()
 $('h1').text(tt)	

 if(tt>=0 && tt<969){

 	 $('#menu li').removeClass('on')
 	$('#menu li').eq(0).addClass('on')

 }

 if(tt>=969 && tt<1938){

 	 $('#menu li').removeClass('on')
 	$('#menu li').eq(1).addClass('on')

 }
});


$('section').mousewheel(function(event,delta){



	if(delta>0){
		

		var prev = $(this).prev().offset().top;
		$('html,body').stop().animate({'scrollTop':prev},1400,'easeOutBounce')


	}else if(delta<0){

	var next = $(this).next().offset().top;
	$('html,body').stop().animate({'scrollTop':next},1400,'easeOutBounce')
	}





})





//각섹션의 높이값을 알아낸다.
//offset().top -> 높이값을 알아내는 메서드
 
 var s1 = $('section').eq(0).offset().top
 console.log(s1);
 var s2 =$('section').eq(1).offset().top
 console.log(s2);
  var s3 =$('section').eq(2).offset().top
 console.log(s3);
   var s4 =$('section').eq(3).offset().top
 console.log(s4);










})