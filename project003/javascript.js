$(document).ready(function () {
    let i = 0;
    let ti = 0; /* 스크롤 값 */

    let mn = 0; /* 무비 영상 순번 */
    let mute = false; /* 앨범 노래를 뮤트했는가 체크 */
    var joseeIntervalId = setInterval(josee, 880); /* josee 부분 */
    let jos = 0; /* josee */
    clearInterval(joseeIntervalId);

    // 스크롤 초기화
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1500)

    // header에 마우스 호버시 밀려오도록
    $('header').mouseenter(function () {
        $(this).css({
            'left': 0
        })
    })

    $('header').mouseleave(function () {
        $(this).css({
            'left': -350
        })
    })


    // nav li 를 클릭했을때 순번을 구해라.
    $('nav li').click(function () {
        i = $(this).index()
        $('nav li').removeClass('on')
        $('.title').removeClass('on');
        $(this).addClass('on')
        $('.title').eq(i).addClass('on');


        if (mute == false) {
            if (i == 1) {
                $('.phone .play').trigger('click');
            } else {
                $('.phone .stop').trigger('click');
            }
        }


        if (i == 2) {
            $('.movie .play').trigger('click');
        } else {
            $('.movie .stop').trigger('click');
        }

        // $(this).css({'color' : 'red'})

        $('section').css({
            'left': -100 * i + '%'
        })
        ti = i; /* 저장된 스크롤값으로 갑자기 휙 움직임을 방지 */
        i++;
    })

    // section의 높이를 윈도우의 높이로 변환해라
    let ht = $(window).height();
    $('section').height(ht);

    // 브라우저가 리사이즈 될때마다, section의 높이를 윈도우의 높이로 변환해라
    $(window).resize(function () {
        $(this).scrollTop(0);
        let ht = $(window).height();
        $('section').height(ht)
    })


    $('section').mousewheel(function (event, delta) {
        $('.mouse_txt').css({
            'display': 'none'
        });

        // 마우스 휠을 내렸을때(스크롤바 올라감)
        if (delta > 0) {
            if (ti > 0) {
                ti--
            }
        }

        // 마우스 휠을 올렸을때(스크롤바 내려감)
        if (delta < 0) {
            if (ti < 3) {
                ti++
            }
        }

        // 해당 아티클에 도착하면 노래 스타트
        // 뮤트가 거짓일 경우에만 실행
        if (mute == false) {

            if (ti == 1) {
                // ad.currentTime = 0;
                $('.phone .play').trigger('click');
            } else {
                $('.phone .stop').trigger('click');
            }
        }

        // 해당 아티클에 도착했을때부터 영상 스타트 되도록.
        if (ti == 2) {
            $('.movie .play').trigger('click');
        } else {
            $('.movie .stop').trigger('click');
        }

        // 해당 아티클에 있는 경우 li에 on값 주기
        $('nav li').removeClass('on')
        $('.title').removeClass('on');
        $('nav li').eq(ti).addClass('on')
        $('.title').eq(ti).addClass('on');


        // 위치 이동
        $('section').css({
            'left': -100 * ti + '%'
        })

    });

    var url = $('#con02').attr('src');

    // 앨범
    let coni = 0;
    // 앨범 부분 노래마다 배경 바뀌게
    $('.ph_btn p:nth-child(4)').click(function () {
        $('.ph_btn p:nth-child(3)').trigger('click');
        clearInterval(joseeIntervalId);
        console.log(">" + coni);

        //coni = $(this).index()

        $('.con').removeClass('on');

        if (coni == 0) {
            $('.mText').addClass('on');
            jos = 0;
            joseeIntervalId = setInterval(josee, 880);
        } else {
            $('.mText').removeClass('on');
            clearInterval(joseeIntervalId);
        }


        if (coni < 10) {
            coni++;
            $('.con').eq(coni).addClass('on');
            $('.music_name').removeClass('on');
            $('.music_name').eq(coni).addClass('on');

            $('.album_thum p').removeClass('on');
            $('.album_thum p').eq(coni).addClass('on');
        }

        if (coni == 10) {
            coni = 0;
            $('.con').eq(coni).addClass('on');

            $('.music_name').removeClass('on');
            $('.music_name').eq(coni).addClass('on');

            $('.album_thum p').removeClass('on');
            $('.album_thum p').eq(coni).addClass('on');


            // 마지막 순번의 버튼을 눌러 페이지를 넘긴 후, 다시 되돌릴 경우 슬라이드가 휙 움직임을 방지
            // ti = 2;
            // $('nav li').removeClass('on')
            // $('nav li').eq(ti).addClass('on')


        }

        ad.currentTime = 0;
        ad.pause();
        $('.phone .play').trigger('click');

        // ad.currentTime = 0;
        // ad.pause();

        // ad = $('audio').get(coni);
        // ad.play();

    });

    $('.ph_btn p:nth-child(1)').click(function () {
        $('.ph_btn p:nth-child(3)').trigger('click');
        clearInterval(joseeIntervalId);
        console.log("<" + coni)
        //coni = $(this).index()
        $('.con').removeClass('on');

        if (coni == 2) {
            $('.mText').addClass('on');
            jos = 0;
            joseeIntervalId = setInterval(josee, 880);
        } else {
            $('.mText').removeClass('on');
            clearInterval(joseeIntervalId);
        }

        if (coni > -1) {
            coni--;
            $('.con').eq(coni).addClass('on');

            $('.music_name').removeClass('on');
            $('.music_name').eq(coni).addClass('on');

            $('.album_thum p').removeClass('on');
            $('.album_thum p').eq(coni).addClass('on');

            // 그 앞거 음소거
            // ad.currentTime = 0;
            // ad = $('audio').get(coni + 1);
            // ad.pause();

            // ad = $('audio').get(coni);
            // ad.play();
        }

        if (coni == -1) {
            coni = 9;
            $('.album_thum p').removeClass('on');
            $('.album_thum p').eq(11).addClass('on');
            $('.con').eq(coni).addClass('on');

            // 그 앞거 음소거
            // ad.currentTime = 0;
            // ad = $('audio').get(11);
            // ad.pause();

            // ad = $('audio').get(coni);
            // ad.play();

            // $('section').css({
            //     'left': -200 * ti + '%'
            // })

            // // 마지막 순번의 버튼을 눌러 페이지를 넘긴 후, 다시 되돌릴 경우 슬라이드가 휙 움직임을 방지
            // ti = 2;
            // $('nav li').removeClass('on')
            // $('nav li').eq(ti).addClass('on')
        }

        ad.currentTime = 0;
        ad.pause();
        $('.phone .play').trigger('click');
    });


    // 정지 버튼 누르면 멈추게
    $('.ph_btn p:nth-child(2)').click(function () {
        mute = true;
        clearInterval(joseeIntervalId);

        $(this).css({
            'display': 'none'
        });
        $('.ph_btn p:nth-child(3)').css({
            'display': 'flex'
        })
        $('.phone .stop').trigger('click');
    });

    $('.ph_btn p:nth-child(3)').click(function () {
        mute = false;
        joseeIntervalId = setInterval(josee, 880);

        $(this).css({
            'display': 'none'
        });
        $('.ph_btn p:nth-child(2)').css({
            'display': 'flex'
        })
        $('.phone .play').trigger('click');
    });


    $('.phone .play').click(function () {
        ad = $('audio').get(coni);
        ad.play();
    })

    $('.phone .stop').click(function () {
        ad = $('audio').get(coni);
        ad.pause();
    });



    pck = false;
    // 화살표 클릭 시 핸드폰 숨김
    $('.phone .vw_btn').click(function () {
        $('.phone').css({
            'right': -420 + 'px'
        })
        $('.side .view').removeClass('on');
        pck = !pck;
    })


    // 버튼 클릭하면 핸드폰이 밀려오게
    $('.side .view').click(function () {
        if (pck) {
            $('.phone').css({
                'right': 30 + 'px'
            })
            $(this).addClass('on');

        }
        pck = !pck;
    })

    // 앨범 핸드폰 현재 시간
    setInterval(function () {

        const date = new Date();
        const hr = date.getHours();
        const min = date.getMinutes();
        let hNum, mNum;

        // 한자리 숫자일시 0 붙이기
        if (min >= 10) {
            mNum = min;
        } else {
            mNum = '0' + min;
        }

        if (hr >= 10) {
            hNum = hr;
        } else {
            hNum = '0' + hr;
        }

        if (hr >= 13) {
            hNum = '0' + (hr - 12);
        } else if (hr >= 13 && hr == 22 || hr == 23 || hr == 24) {
            hNum = hr - 12;
        }

        $('.time').text(hNum + ':' + mNum);


    }, 1000);


    // 앨범 josee
    function josee() {
        if (jos == 0) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(1)').addClass('on');
        } else if (jos == 19) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(2)').addClass('on');
        } else if (jos == 26) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(3)').addClass('on');
        } else if (jos == 33) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(4)').addClass('on');
        } else if (jos == 41) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(5)').addClass('on');
        } else if (jos == 48) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(6)').addClass('on');
        } else if (jos == 55) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(7)').addClass('on');
        } else if (jos == 62) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(8)').addClass('on');
        } else if (jos == 68) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(9)').addClass('on');
        } else if (jos == 77) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(10)').addClass('on');
        } else if (jos == 84) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(11)').addClass('on');
        } else if (jos == 92) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(12)').addClass('on');
        } else if (jos == 99) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(13)').addClass('on');
        } else if (jos == 103) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(14)').addClass('on');
        } else if (jos == 110) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(15)').addClass('on');
        } else if (jos == 115) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(16)').addClass('on');
        } else if (jos == 124) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(17)').addClass('on');
        } else if (jos == 142) {
            $('.mText p').removeClass('on');
            $('.mText p:nth-child(1)').addClass('on');
            jos = 0;
        }

        jos++;
        console.log(jos)
        // $('h1').text(jos);
    }

    // 무비
    // 목록에서 클릭한 이름과 같은 영상이 보여지도록
    $('.movie_list li').click(function () {
        mn = $(this).index();
        $('.movie_list li').removeClass('on');
        $(this).addClass('on');

        $('.movie_view p').removeClass('on');
        // 다른 무비 멈추게
        vid.pause();
        $('.movie_view p').eq(mn).addClass('on');
        // 해당 영상 목록 클릭하면 자동재생
        vid = $('video').get(mn);
        vid.play();

        // (vid 재생기록 저장되는거 초기화하는 방법 알아낼것)
        // vid.currentTime = 0;
    })

    $('.movie .play').click(function () {
        vid = $('video').get(mn);
        vid.play();
    })

    $('.movie .stop').click(function () {
        vid = $('video').get(mn);
        vid.pause();
    })



    // 콘서트 슬라이드
    let a = 0;

    // $('.concert_slide button').click(function () {

    //     a++;
    //     // console.log(a);
    //     $('.concert_slide li').eq(a - 1).clone().appendTo('.concert_slide ul')
    //     $('.concert_slide ul').css({
    //         'left': -200 * a
    //     })
    // });

    // li에 마우스 호버시 필터 풀리게
    $('.concert_slide ul:nth-child(1) li').mouseenter(function () {
        let et = $(this).index();

        $('.concert_slide li').removeClass('on');
        $('.concert_slide ul:nth-child(1) li').eq(et).addClass('on');
        $('.concert_info li').removeClass('on');
        $('.concert_info ul:nth-child(1) li').eq(et + 1).addClass('on');

        if (et == 9) {
            $('.concert_info ul:nth-child(2) li').eq(0).addClass('on');
        }

        $('.cursor').addClass('on');
        $('.cursor').stop().animate({
            'border-color': '#0881A3'
        }, 300);
        console.log(et)
    })

    $('.concert_slide ul:nth-child(2) li').mouseenter(function () {
        let et = $(this).index();

        $('.concert_slide li').removeClass('on');
        $('.concert_slide ul:nth-child(2) li').eq(et).addClass('on');
        $('.concert_info li').removeClass('on');
        $('.concert_info ul:nth-child(2) li').eq(et + 1).addClass('on');

        if (et == 9) {
            $('.concert_info ul:nth-child(1) li').eq(0).addClass('on');
        }

        $('.cursor').addClass('on');
        $('.cursor').stop().animate({
            'border-color': '#0881A3'
        }, 300);
        console.log(et)
    })


    $('.concert_slide li').mouseleave(function () {

        $('.concert_slide li').removeClass('on');
        $('.concert_info ul li').removeClass('on');
        $('.cursor').removeClass('on');
        $('.cursor').stop().animate({
            'border-color': '#fff'
        }, 300)
    })


    // 콘서트 마우스 커서 따라다니게 
    const width = $(".cursor").width() / 2;
    const height = $(".cursor").height() / 2;

    $(window).mousemove(function (e) {
        $('.cursor').css({
            'left': e.pageX - 100,
            'top': e.pageY - 100
        });

        $('.cursor').css({
            'filter': 'blur(' + 0 + 'px)'
        });

        $('.concert_info ul li').css({
            'left': e.pageX - 1100,
            'top': e.pageY - 50 + '%'
        });
    });

})