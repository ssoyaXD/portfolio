$(document).ready(function () {
    // 로딩중
    const loader = document.querySelector('.loader');
    const html = document.querySelector('html');


    html.style.overflow = 'hidden'; //로딩 중 스크롤 방지
    window.addEventListener('load', () => {

        setTimeout(() => { //로딩속도 구현

            loader.style.opacity = '0';
            html.style.overflow = 'auto'; //스크롤 방지 해제

            setTimeout(() => {
                loader.style.display = 'none';
            }, 400);

        }, 5000);

    })

    $(window).resize(function () {
        $(this).scrollTop(0);
        let ht = $(window).height();
        $('.wrap').height(ht)
    })

    // 카드 클릭 시 프로필 노출, 프로필 클릭 시 프로필 감춤
    $('.card').click(function () {
        $('.profile_out').addClass('on');
    });

    $('.profile_out').click(function () {
        $('.profile_out').removeClass('on');
    });

    // 사이트 열면 차가 왼쪽에서 중앙으로 오게
    $('.snackCart').animate({
        'left': 0
    }, 1000);
    $('.bottom').animate({
        'left': 0
    }, 1000);

    $('nav').css({
        'z-index': 5
    })

    $('.text').animate({
        'opacity': 1
    }, 2000);

    $('nav ul li').css({
        'width': 30 + 'px',
        'height': 120 + 'px',
        'font-size': 6 + 'pt',
        'margin-top': 10 + 'px'
    });

    $('.character').css({
        'width': 150 + 'px',
        'height': 200 + 'px',
        'margin-right': 0 + 'px',
        'margin-top': -2 + '%',
        'animation': 'char_ani 3s alternate infinite'
    });

    $('.back002_info').css({
        'width': 0,
        'height': 0,
        'margin-top': 0
    })

    $('.card').css({
        'width': 80 + 'px',
        'height': 50 + 'px',
        'bottom': 40 + 'px'
    });

    $('.back_btn').css({
        'width': 0,
        'height': 0,
        'z-index': -1
    });

    $('.wrap').one('click', () => {
        $('.wrap').css({
            'cursor': 'default'
        });

        $('.snackCart').css({
            'width': 100 + '%',
            'height': 100 + '%',
            'margin-bottom': 0,
            'margin-left': 0
        });

        $('.back001').css({
            'background-size': 100 + '%',
            'width': 100 + '%',
            'height': 100 + '%',
            'margin-top': -90 + 'px',
            'position': 'absolute',
            'z-index': 3
        });

        $('.back002').css({
            'background-size': 100 + '%',
            'width': 100 + '%',
            'height': 100 + '%',
            'margin-left': 180 + 'px',
            'margin-top': 100 + 'px'
        });

        $('.back003').css({
            'background-size': 100 + '%',
            'width': 140 + '%',
            'height': 140 + '%',
            'margin-left': -600 + 'px',
            'margin-top': 30 + 'px'
        });

        $('.back004').css({
            'opacity' : 0
        });

        $('.back002_info').css({
            'width': 208 + 'px',
            'height': 281 + 'px',
            'margin-top': 165 + 'px'
        });

        $('.back_btn').css({
            'width': 200 + 'px',
            'height': 60 + 'px',
            'z-index': 80
        });

        // 고양이 사진에 마우스 들어가면 설명 노출
        $('.back002_info').mouseenter(function () {
            $(this).addClass('on');
        });

        $('.text').css({
            'opacity': 0,
            'z-index': 30,
            'top': -100 + '%'
        })

        $('nav').animate({
            'z-index': 22
        }, 1000);

        // 말풍선
        $('.char_text').stop().animate({
            'opacity': 0.8,
            'margin-top': 220 + 'px'
        }, 1000);

        // 말풍선 대화 넘김
        setTimeout(function () {
            $('.char_text p:nth-child(1)').stop().animate({
                'opacity': 0
            }, 1500)
            $('.char_text p:nth-child(2)').stop().animate({
                'opacity': 1
            }, 1500)
        }, 3000);


        // $('.snackCart').animate({
        //     'width': 100 + '%',
        //     'height': 100 + '%'
        // }, 2500);

        $('.top').animate({
            'opacity': 1
        }, 500);

        $('.top').animate({
            'top': -100 + '%'
        }, 4500);

        $('nav ul li').css({
            'width': 60 + 'px',
            'height': 260 + 'px',
            'font-size': 18 + 'pt',
            'margin-top': 160 + 'px'
        });

        $('nav ul').css({
            'margin-left': 10 + '%'
        });

        $('.character').css({
            'width': 500 + 'px',
            'height': 700 + 'px',
            'margin-top': 0,
            'margin-right': -80 + 'px',
            'animation': 'char_ani 3s alternate infinite, char_ani002 1.5s 3s alternate infinite'
        });

        $('.bottom').css({
            'width': 100 + '%',
            'height': 100 + '%',
            'bottom': 450 + 'px',
            'left': 0,
            'margin-left': 200 + 'px',
            'margin-bottom': 0,
            'transform': 'scale(' + 3 + ')'
        });

        $('.bottom').animate({
            'z-index': 20
        }, 2500);

        $('.card').css({
            'width': 160 + 'px',
            'height': 100 + 'px',
            'left': 100 + 'px',
            'bottom': 160 + 'px'
        });

    });

    $('nav ul li').click(function () {
        let i = $(this).index();

        $('.pj').addClass('on');
        $('.pj>div').removeClass('on');
        $('.pj>div').eq(i).addClass('on');

        console.log(i);
    })

    $('.clear p').click(function () {
        $('.pj').removeClass('on');
        $('.pj>div').removeClass('on');
    });



    // 프로필 손 좌표에 따라 움직이기
    $('.profile_out').mousemove(function (e) {

        //마우스의 좌표값을 찾아내기
        var posX = e.pageX;
        var posY = e.pageY;


        //첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
        $(".profile").css({
            "left": 0 + (posX / 20),
            "bottom": 0 - (posY / 20)
        });

    });

    // 메뉴 호버시 말풍선 내용 변경
    $('nav ul li').mouseenter(function () {
        let a = $(this).index();

        $('.char_text p:nth-child(2)').animate({
            'opacity': 0
        }, 0)

        $('.char_text p').animate({
            'opacity': 0
        }, 0);

        $('.char_text p').eq(a + 2).animate({
            'opacity': 1
        }, 0);
    });

})