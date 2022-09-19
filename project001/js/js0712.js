$(document).ready(function () {

    // 실행문

    // section의 높이를 윈도우의 높이로 변환해라
    let ht = $(window).height();
    $('section').height(ht);

    // 브라우저가 리사이즈 될때마다, section의 높이를 윈도우의 높이로 변환해라
    $(window).resize(function () {

        let ht = $(window).height();
        $('section').height(ht)
    })


    // menu의 li를 클릭할때, section의 순번을 찾아 각자의 높이만큼씩 스크롤의 위치를 움직여라
    // 이건 section의 크기를 알기 때문에, offsetTop 써서 찾지 않아도됨
    $('#menu li').click(function () {
        let ht = $(window).height();
        let i = $(this).index();
        let nowTop = ht * i;

        // 바디의 스크롤을 조작
        $('html, body').stop().animate({
            scrollTop: nowTop
        }, 1400)


        // 메뉴에 on 값을 주어라
        $('#menu li').removeClass('on');
        $(this).addClass('on');

    });


    // 마우스 휠을 했을때 이벤트가 일어나라
    // 현위치(section) 에서 마우스를 올렸을때 전으로 가고
    // 현위치(section) 에서 마우스를 내렸을때 후로 가라
    // 왜 ht를 써서 높이값을 찾는게 아니고, offsetTop으로 찾는가? = 마우스를 몇번 움직였는지, 지금 어디에 있는지 알수없기 때문에 ht에 몇을 곱해야하는지 알수없음
    // 이걸 사용하고 싶으면 모든 박스 이름(section)이 똑같고, 사이즈가 똑같아야함.
    // 이징값은 애니메이션 속도 뒤에 쓸것. ex) easeOutBounce
    $('section').mousewheel(function (event, delta) {

        if (delta > 0) {
            // 이전 순서로 이동
            let prev = $(this).prev().offset().top;

            $('html, body').stop().animate({
                scrollTop: prev
            }, 1400, 'easeOutBounce')

        } else if (delta < 0) {
            // 다음 순서로 이동
            let next = $(this).next().offset().top;

            $('html, body').stop().animate({
                scrollTop: next
            }, 1400, 'easeOutBounce')

        }
    });



    // 섹션에서 마우스가 움직일때, 이미지가 반응하여 움직여라 
    $('section').mousemove(function (e) {

        let x = e.pageX; /* x는 좌우값의 변동 수치를 조정한다 */
        let y = e.pageY; /* y는 상하값의 변동 수치를 조정한다 */


        // 나누는 수치가 커질수록 마우스에 따른 움직임의 폭이 작아지고, 
        // 나누는 수치가 적을수록 이미지를 움직이는 폭이 커진다.


        // 기존 css에서 설정해준 값을 여기서 재설정해줌
        $('.p11').css({
            'bottom': 20 - (y / 30),
            'right': 20 - (x / 30)
        })
        $('.p12').css({
            'bottom': -40 + (y / 20),
            'right': 130 + (x / 20)
        })
        $('.p13').css({
            'bottom': 180 + (y / 20),
            'right': 60 + (x / 20)
        })

        $('.p21').css({
            'bottom': -480 - (y / 30),
            'right': -180 - (x / 30)
        })
        $('.p22').css({
            'bottom': -40 + (y / 50),
            'right': 130 + (x / 50)
        })

        $('.p31').css({
            'bottom': 30 - (y / 30),
            'right': 280 - (x / 30)
        })
        $('.p32').css({
            'bottom': -270 + (y / 20),
            'right': 110 + (x / 20)
        })
        $('.p33').css({
            'bottom': -130 + (y / 20),
            'right': -70 + (x / 20)
        })

        $('.p41').css({
            'bottom': -120 - (y / 30),
            'right': 20 - (x / 30)
        })
        $('.p42').css({
            'bottom': -180 + (y / 20),
            'right': 0 + (x / 20)
        })
    });



    // 윈도우에서 스크롤했을때 스크롤의 위치 값을 찾아내고, 위치에 따라 화면의 구간이
    // 바뀌고 메뉴의 on값을 바꾸어라

    $(window).scroll(function () {

        let sc = $(this).scrollTop();
        $('h1').text(sc);

        let ht = $(window).height();

        // if문을 활용한 설정
        // if(sc>=0 && sc < (ht*1)) {
        //     $('#menu li').removeClass('on')
        //     $('#menu li').eq(0).addClass('on')
        // }

        // if(sc>=(ht*1)-1 && sc < (ht*2)) {
        //     $('#menu li').removeClass('on')
        //     $('#menu li').eq(1).addClass('on')
        // }

        // if(sc>=(ht*2)-1 && sc < (ht*3)) {
        //     $('#menu li').removeClass('on')
        //     $('#menu li').eq(2).addClass('on')
        // }

        // if(sc>=(ht*3)-1 && sc < (ht*4)) {
        //     $('#menu li').removeClass('on')
        //     $('#menu li').eq(3).addClass('on')
        // }


        // 반복문을 활용한 설정 for(변수설정, 조건설정, 증감설정) { 실행문 }


        for(var a = 0;  a<5; a++) {
            if(sc>=(ht*a) && sc < (ht*(a+1))) {
                $('#menu li').removeClass('on')
                $('#menu li').eq(a).addClass('on')
            }
        }

    })

})