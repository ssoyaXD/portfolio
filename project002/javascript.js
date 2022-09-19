$(document).ready(function () {


    // header의 높이, section의 높이를 윈도우의 높이로 맞춤
    let ht = $(window).height();
    let secNum = $('section').size()

    let cart = 0;
    // product 클릭 시, 유틸의 카트 갯수 더하기
    $('.product>p:nth-child(2) a').click(function (e) {

        e.preventDefault();

        cart++;
        $('.cart span').text(cart);
        $('.popUp em').text('('+cart+')');
        $('.popUp').addClass('on');

        if(cart > 9) {
            $('.cart span').css({'width' : 30}) 
            $('.popUp em').css({'margin-left' : -35}) 
        }
    })

    $('.popUp a i').click(function (e) {

        e.preventDefault();

        $('.popUp').removeClass('on');
    })

    // 랜딩 페이지 이미지 눈 움직이기
    $('.banner').mousemove(function (e) {

        //마우스의 좌표값을 찾아내기
        var posX = e.pageX;
        var posY = e.pageY;


        //첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
        $(".p12").css({
            "right": 45 - (posX / 80),
            "top": -15 + (posY / 90)
        });

    });


    // fixed 메뉴
    $(window).scroll(function () {
        let sc = $(this).scrollTop();
        let sec01 = $('header').offset().top;

        if (sc >= sec01) {
            $('.fixed_menu').addClass('on');
            $('.menu li ul').css({'top' : 160});
        } else {
            $('.fixed_menu').removeClass('on');
            $('.menu li ul').css({'top' : 80});
        }
    })


    // 랜딩 페이지 슬라이드

    var landingIntervalId = setInterval(landing_slide, 3500);
    let landing_sl = 0;

    // 슬라이드 버튼 클릭시, 선택됨을 표시하도록 p의 색을 변경
    // 버튼 클릭시 해당 순번의 section 보여줌
    $('.banner_btn p').click(function (e) {

        e.preventDefault();
        
        let landing_i = $(this).index()

        $('.banner_btn p').removeClass('on');
        $('.landing_txt').removeClass('on');
        $('.st_img_set').removeClass('on');

        $(this).addClass('on');
        $('.landing_txt').eq(landing_i).addClass('on');
        $('.st_img_set').eq(landing_i).addClass('on');
    
        // console.log(landing_i);
        $('.landing_img>div').removeClass('on')
        $('.landing_img>div').eq(landing_i).addClass('on')

        // 반복 중간에 클릭해도 그 다음부터 슬라이드 되도록
        landing_sl = landing_i;
    });

    function landing_slide() {

        landing_sl++;

        if (landing_sl == 3) {
            landing_sl = 0;
        }

        // console.log(landing_sl);

        $('.banner_btn p').eq(landing_sl).trigger('click')

    }

    // 마우스 올라갔을시 인터벌 중지
    $('.landing_img>div').mouseenter(function () {
        clearInterval(landingIntervalId);
    });

    // 마우스 내려가면 인터벌 재개
    $('.landing_img>div').mouseleave(function () {
        landingIntervalId = setInterval(landing_slide, 3500);
    });



    // con01 펠스토랑 배경 이미지 슬라이드
    var restIntervalId = setInterval(rest_slide, 3000);
    let rest_sl = 0;

    function rest_slide() {

        rest_sl++;
        $('.bgImg>div').css({
            'transform': 'rotate(' + 90 * -rest_sl + 'deg)'
        })
    }



    // con02 립 이미지 클릭이벤트
    // con02 립 정보 타이핑 모션
    let txt = $('.lip_txt p.on').text().split("")
    // console.log(txt);

    let ti = txt.length + 1
    // console.log(ti)

    let tt = 0;

    var interval = setInterval(txtInterval, 150);

    function txtInterval() {
        // console.log(txt[tt])

        // To를 안쓰면 대상을 먼저 쓰고 객체를 그 뒤에 쓸것
        $('.cursor').append(txt[tt]);

        if (tt < ti) {
            tt++;
        }

        if (tt == ti) {
            tt = 0;
            clearInterval(interval);
            // 전부 타이핑했다면, 5초 기다리기
            setTimeout(function () {
                $('.cursor').empty();
                interval = setInterval(txtInterval, 200);
            }, 5000);
        }

    }

    // 해당 색상 클릭시, con02 립정보들 변경
    $('.color_chip p:nth-child(1)').click(function (e) {
        //컬러 칩 색 변경
        $('.show_color p:nth-child(1)').css({
            'background-color': '#E47067'
        });

        // 저장된 텍스트 배열 지우기
        $('.cursor').empty();
        clearInterval(interval);
        tt = 0;

        // 상단 이동 방지
        e.preventDefault();

        $('.lip_name p').removeClass('on');
        $('.lip_txt p').removeClass('on');
        $('.lip_img p').removeClass('on');
        $('.lip_test_img p').removeClass('on');


        $('.lip_name p:nth-child(1)').addClass('on');
        $('.lip_txt p:nth-child(1)').addClass('on');
        $('.lip_img p:nth-child(1)').addClass('on');
        $('.lip_test_img p:nth-child(1)').addClass('on');

        txt = $('.lip_txt p.on').text().split("")
        interval = setInterval(txtInterval, 150);

    })

    $('.color_chip p:nth-child(2)').click(function (e) {
        //컬러 칩 색 변경
        $('.show_color p:nth-child(1)').css({
            'background-color': '#E03323'
        });
        // 저장된 텍스트 배열 지우기
        $('.cursor').empty();
        clearInterval(interval);
        tt = 0;

        // 상단 이동 방지
        e.preventDefault();

        $('.lip_name p').removeClass('on');
        $('.lip_txt p').removeClass('on');
        $('.lip_img p').removeClass('on');
        $('.lip_test_img p').removeClass('on');


        $('.lip_name p:nth-child(2)').addClass('on');
        $('.lip_txt p:nth-child(2)').addClass('on');
        $('.lip_img p:nth-child(2)').addClass('on');
        $('.lip_test_img p:nth-child(2)').addClass('on');

        txt = $('.lip_txt p.on').text().split("")
        interval = setInterval(txtInterval, 150);

    })

    $('.color_chip p:nth-child(3)').click(function (e) {
        //컬러 칩 색 변경
        $('.show_color p:nth-child(1)').css({
            'background-color': '#F3434E'
        });
        // 저장된 텍스트 배열 지우기
        $('.cursor').empty();
        clearInterval(interval);
        tt = 0;

        // 상단 이동 방지
        e.preventDefault();

        $('.lip_name p').removeClass('on');
        $('.lip_txt p').removeClass('on');
        $('.lip_img p').removeClass('on');
        $('.lip_test_img p').removeClass('on');


        $('.lip_name p:nth-child(3)').addClass('on');
        $('.lip_txt p:nth-child(3)').addClass('on');
        $('.lip_img p:nth-child(3)').addClass('on');
        $('.lip_test_img p:nth-child(3)').addClass('on');

        txt = $('.lip_txt p.on').text().split("")
        interval = setInterval(txtInterval, 150);

    })

    $('.color_chip p:nth-child(4)').click(function (e) {
        //컬러 칩 색 변경
        $('.show_color p:nth-child(1)').css({
            'background-color': '#AF280A'
        });
        // 저장된 텍스트 배열 지우기
        $('.cursor').empty();
        clearInterval(interval);
        tt = 0;

        // 상단 이동 방지
        e.preventDefault();

        $('.lip_name p').removeClass('on');
        $('.lip_txt p').removeClass('on');
        $('.lip_img p').removeClass('on');
        $('.lip_test_img p').removeClass('on');


        $('.lip_name p:nth-child(4)').addClass('on');
        $('.lip_txt p:nth-child(4)').addClass('on');
        $('.lip_img p:nth-child(4)').addClass('on');
        $('.lip_test_img p:nth-child(4)').addClass('on');

        txt = $('.lip_txt p.on').text().split("")
        interval = setInterval(txtInterval, 150);

    })

    $('.color_chip p:nth-child(5)').click(function (e) {
        //컬러 칩 색 변경
        $('.show_color p:nth-child(1)').css({
            'background-color': '#DA524C'
        });
        // 저장된 텍스트 배열 지우기
        $('.cursor').empty();
        clearInterval(interval);
        tt = 0;

        // 상단 이동 방지
        e.preventDefault();

        $('.lip_name p').removeClass('on');
        $('.lip_txt p').removeClass('on');
        $('.lip_img p').removeClass('on');
        $('.lip_test_img p').removeClass('on');


        $('.lip_name p:nth-child(5)').addClass('on');
        $('.lip_txt p:nth-child(5)').addClass('on');
        $('.lip_img p:nth-child(5)').addClass('on');
        $('.lip_test_img p:nth-child(5)').addClass('on');

        txt = $('.lip_txt p.on').text().split("")
        interval = setInterval(txtInterval, 150);

    })

    $('.color_chip p:nth-child(6)').click(function (e) {
        //컬러 칩 색 변경
        $('.show_color p:nth-child(1)').css({
            'background-color': '#C3413A'
        });
        // 저장된 텍스트 배열 지우기
        $('.cursor').empty();
        clearInterval(interval);
        tt = 0;

        // 상단 이동 방지
        e.preventDefault();

        $('.lip_name p').removeClass('on');
        $('.lip_txt p').removeClass('on');
        $('.lip_img p').removeClass('on');
        $('.lip_test_img p').removeClass('on');


        $('.lip_name p:nth-child(6)').addClass('on');
        $('.lip_txt p:nth-child(6)').addClass('on');
        $('.lip_img p:nth-child(6)').addClass('on');
        $('.lip_test_img p:nth-child(6)').addClass('on');

        txt = $('.lip_txt p.on').text().split("")
        interval = setInterval(txtInterval, 150);

    })

    $('.color_chip p:nth-child(7)').click(function (e) {
        //컬러 칩 색 변경
        $('.show_color p:nth-child(1)').css({
            'background-color': '#DB4C55'
        });
        // 저장된 텍스트 배열 지우기
        $('.cursor').empty();
        clearInterval(interval);
        tt = 0;

        // 상단 이동 방지
        e.preventDefault();

        $('.lip_name p').removeClass('on');
        $('.lip_txt p').removeClass('on');
        $('.lip_img p').removeClass('on');
        $('.lip_test_img p').removeClass('on');


        $('.lip_name p:nth-child(7)').addClass('on');
        $('.lip_txt p:nth-child(7)').addClass('on');
        $('.lip_img p:nth-child(7)').addClass('on');
        $('.lip_test_img p:nth-child(7)').addClass('on');

        txt = $('.lip_txt p.on').text().split("")
        interval = setInterval(txtInterval, 150);

    })

    $('.color_chip p:nth-child(8)').click(function (e) {
        //컬러 칩 색 변경
        $('.show_color p:nth-child(1)').css({
            'background-color': '#E4274D'
        });
        // 저장된 텍스트 배열 지우기
        $('.cursor').empty();
        clearInterval(interval);
        tt = 0;

        // 상단 이동 방지
        e.preventDefault();

        $('.lip_name p').removeClass('on');
        $('.lip_txt p').removeClass('on');
        $('.lip_img p').removeClass('on');
        $('.lip_test_img p').removeClass('on');


        $('.lip_name p:nth-child(8)').addClass('on');
        $('.lip_txt p:nth-child(8)').addClass('on');
        $('.lip_img p:nth-child(8)').addClass('on');
        $('.lip_test_img p:nth-child(8)').addClass('on');


        txt = $('.lip_txt p.on').text().split("")
        interval = setInterval(txtInterval, 150);

    });



    // 윈도우가 리사이즈 될때마다 사이즈 재설정
    $(window).resize(function () {
        let ht = $(window).height();

        $('header').height(ht);
        $('section').height(ht-50);

        let secNum = $('section').size()

        // wrap의 높이를 화면의 높이와 section의 높이를 곱한걸로 대입
        $('#wrap').height(ht * secNum);
    });




    // product 가로 스크롤

    let numPro = $('.product').size()
    // console.log(numPro);
    let widsec = 460 * numPro;
    let widTotal = widsec;
    console.log(ht);
    $('body').height(widTotal);
    console.log(widTotal);
    // $('html, body').scrollTop(widsec);

    let sec03 = $('section').eq(2).offset().top;
    let sec04 = $('section').eq(3).offset().top;
    let sec05 = $('footer').offset().top;



    $(window).scroll(function () {
        let sc = $(this).scrollTop();

        if (sc >= sec03 && sc < sec03+4140) {
            $('.product_set').addClass('on');
            $('.product_set').css({'left' : -sc+3840});
        } else {
            $('.product_set').removeClass('on');
        }
    })



    // let sc = $(this).scrollTop();
    // ht = $(window).height();


    //     $('html, body').mousewheel(function (e, delta) {
    //         this.scrollLeft -= (delta * 100);
    //         e.preventDefault();
    //     });




    // peri sns
    // 콘텐츠가 날아오게 하기
    $(window).scroll(function () {
        let sc = $(this).scrollTop();
        let tt = sec04 / 3;

        if (sc >= sec04-100 && sc < sec05+tt) {
            $('section').eq(3).addClass('on');

        } else {
            $('section').eq(3).removeClass('on');
        }
    })

    // $('.con04').mousemove(function (e) {

    //     // 화면에 표기하기
    //     $('.sns_cursor').css({
    //         'left': e.pageX - 100,
    //         'top': e.pageY - 100
    //     })

    // });



})