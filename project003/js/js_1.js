$(document).ready(function(){

	//실행문

	//브라우져의높이를 section의높이와 같게하라.
	var ht = $(window).height();

	$('section').height(ht)

	//브라우져가 리사이즈 될때마다 section의 높이도 따라가라.
	$(window).resize(function(){

		var ht = $(window).height();
		$('section').height(ht)
	});

	//마우스가 움직이때마다 각 박스의 이미지가 커서값을 받아서 움직인다.
	$('section').mousemove(function(e){

		var posX = e.pageX;
		var posY = e.pageY;

		$('.p11').css({'bottom':20-(posY/30),'right':20-(posX/30)})
	})




	//메뉴를 클릭했을때 번호를 구하고 해당번호의 section이 이동해라.
	//메뉴를 클릭했을때 메뉴의 on값을 받고 나머지값은 빼라.

	$('#gnb li').click(function(e){
		e.preventDefault()
		var i = $(this).index()
		var ht= $(window).height();

		var nowTop = i*ht
		$('html,body').stop().animate({scrollTop:nowTop},1400);

		$('#gnb li').removeClass('on')	
		$(this).addClass('on')

	});


	//화면의 스크롤의 위치값을 찾고 해당위치에 있을때 메뉴가 on값을 받아라.

	$(window).scroll(function(){

		var scroll = $(window).scrollTop()
		$('.top').text(scroll)

	var ht= $(window).height();

	if(scroll>=ht*0 && scroll<ht*1){
		$('#gnb li').removeClass('on')
		$('#gnb li').eq(0).addClass('on')
	}
	if(scroll>=ht*1 && scroll<ht*2){
		$('#gnb li').removeClass('on')
		$('#gnb li').eq(1).addClass('on')
	}
	if(scroll>=ht*2 && scroll<ht*3){
		$('#gnb li').removeClass('on')
		$('#gnb li').eq(2).addClass('on')
	}
	if(scroll>=ht*3 && scroll<ht*4){
		$('#gnb li').removeClass('on')
		$('#gnb li').eq(3).addClass('on')
	}


	});

	//마우스휠을 움직였을때 이전높이 또는 이후높이만큼 이동해라.
	$('section').mousewheel(function(event,delta){
		//위치값을 찾는 메서드활용 - offset().top

		var sec1 =$('section').eq(0).offset().top;
		var sec2 =$('section').eq(1).offset().top;
		var sec3 =$('section').eq(2).offset().top;
		var sec4 =$('section').eq(3).offset().top;

		console.log(sec1)
		console.log(sec2)
		console.log(sec3)
		console.log(sec4);

		if(delta>0){
			 var prev= $(this).prev().offset().top

			$('html,body').stop().animate({scrollTop:prev},1600,'easeOutBounce')

		}else if(delta<0){
			 var next = $(this).next().offset().top

			$('html,body').stop().animate({scrollTop:next},1600,'easeOutBounce')
		}




	})



})