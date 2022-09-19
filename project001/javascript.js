$(document).ready(function () {

    // gnb 서브메뉴
    $('.gnb .top li').mouseenter(function () {
        $(this).removeClass('on');
        $(this).addClass('on');

        $('.gnb .bottom').addClass('on')
        let tt = $(this).index();

        // gnb 배경 색
        $('.menu li a').removeClass('on')
        $('.menu li a').eq(tt).addClass('on')

        // 만약 같은 gnb 아래의 서브메뉴라면, gnb를 hover한것처럼 보여라
        $('.submenu ul').mouseenter(function () {
            $('.menu li a').removeClass('on')
            let stt = $(this).index();
            console.log(stt);
            $('.menu li a').eq(stt).addClass('on')
        })

    });

    $('.gnb').mouseleave(function () {
        $('.gnb .bottom').removeClass('on')
        $('.menu li a').removeClass('on')
    });



    // 공지사항
    let i = $('.notice ul li').index();

    $('.notice .icon_set p:nth-child(1)').click(function (e) {
        e.preventDefault(); /* 버튼 클릭시 상단으로 가는거 방지 */

        if (i < 4) {
            i++;
        }

        if (i == 4) {
            i = 0;
        }

        $('.notice ul li').stop().fadeIn().hide();
        $('.notice ul li').eq(i).show();

    });

    $('.notice .icon_set p:nth-child(2)').click(function (e) {
        e.preventDefault(); /* 버튼 클릭시 상단으로 가는거 방지 */

        if (i < 4) {
            i--;
        }

        if (i == -4) {
            i = 0;
        }

        $('.notice ul li').stop().fadeIn().hide();
        $('.notice ul li').eq(i).show();

    });

    setInterval(function () {

        $('.notice .icon_set p:nth-child(1)').trigger('click');

    }, 3500)



    // 찾아주세요

    let miss = $('.insta_img').index();
    $('.boxC_inner .icon_set p:nth-child(1)').click(function (e) {

        if (miss < 3) {
            miss++;
        }

        if (miss == 3) {
            miss = 0;
        }

        e.preventDefault(); /* 버튼 클릭시 상단으로 가는거 방지 */

        console.log(miss);
        $('.missing_img').removeClass('on')
        $('.missing_img').eq(miss).addClass('on')
        $('.missing_txt').removeClass('on')
        $('.missing_txt').eq(miss).addClass('on')
    });

    // right 버튼을 클릭했을때, 일정 값 만큼 씩, ul을 움직여라. 
    $('.boxC_inner .icon_set p:nth-child(2)').click(function (e) {

        if (miss < 3) {
            miss--;
        }

        if (miss == -3) {
            miss = 0;
        }
        e.preventDefault();

        console.log(miss);
        $('.missing_img').removeClass('on')
        $('.missing_img').eq(miss).addClass('on')
        $('.missing_txt').removeClass('on')
        $('.missing_txt').eq(miss).addClass('on')
    });





    // 보호동물
    let pt = 0;

    var picIntervalId = setInterval(picSlide, 3000);
    // 인터벌 중지
    // clearInterval(picIntervalId);

    function picSlide() {

        if (pt < 7) {
            pt++;
        }

        if (pt == 7) {
            pt = 0;
        }

        $('.pic_set').stop().animate({
            'left': (-350 * pt) + 'px'
        }, 1000);

    }

    $('.pic').mouseenter(function () {
        clearInterval(picIntervalId);
    });

    $('.pic').mouseleave(function () {
        picIntervalId = setInterval(picSlide, 3000);
    });



    // 인스타그램
    let ins = $('.insta_img').index();
    $('.box12 .icon_set p:nth-child(1)').click(function (e) {

        if (ins < 3) {
            ins++;
        }

        if (ins == 3) {
            ins = 0;
        }

        e.preventDefault(); /* 버튼 클릭시 상단으로 가는거 방지 */

        console.log(ins);
        $('.insta_img').removeClass('on')
        $('.insta_img').eq(ins).addClass('on')
    });

    // right 버튼을 클릭했을때, 일정 값 만큼 씩, ul을 움직여라. 
    $('.box12 .icon_set p:nth-child(2)').click(function (e) {

        if (ins < 3) {
            ins--;
        }

        if (ins == -3) {
            ins = 0;
        }
        e.preventDefault();

        console.log(ins);
        $('.insta_img').removeClass('on')
        $('.insta_img').eq(ins).addClass('on')
    });



    // 입양후기
    let tt = 0;

    $('.adopt_review .icon_set p:nth-child(3)').click(function () {

        if (tt < 3) {
            /* 5번 클릭했을때 까지만 출력하라 */
            tt++;
        }

        $('.adopt_review .img .img_set').css({
            'left': (-454 * tt) + 'px'
        });

    })
    // right 버튼을 클릭했을때, 일정 값 만큼 씩, ul을 움직여라. 
    $('.adopt_review .icon_set p:nth-child(1)').click(function () {

        if (tt > 0) {
            tt--;
        }

        // ul의 크기만큼 오른쪽으로 슬라이드
        $('.adopt_review .img .img_set').css({
            'left': (-454 * tt) + 'px'
        });
    })


    // 입양후기 자동 슬라이드 

    var refreshIntervalId = setInterval(fname, 3000);
    // 인터벌 중지
    // clearInterval(refreshIntervalId);

    function fname() {

        if (tt == 3) {
            tt = -1;
        }

        $('.adopt_review .icon_set p:nth-child(3)').trigger('click')

    }

    let ck = 0;
    $('.adopt_review .icon_set p:nth-child(2)').click(function () {

        ck++;
        clearInterval(refreshIntervalId);

        if (ck % 2 == 0) {
            setInterval(fname, 3000);
        }
    });


    // 마우스 올라갔을시 인터벌 중지
    $('.adopt_review .img').mouseenter(function () {
        clearInterval(refreshIntervalId);
    });

    // 마우스 내려가면 인터벌 재개
    $('.adopt_review .img').mouseleave(function () {
        refreshIntervalId = setInterval(fname, 3000);
    });


    // 퀵버튼
    $('.quick_btn li').click(function () {
        let ht = $('.content').height();
        let connum = $(this).index();
        let nowTop = ht * connum;

        console.log("content"+connum)
        if(connum == 0 || connum == 1 || connum == 2){
            $('html, body').stop().animate({
                scrollTop: nowTop
            }, 2000);
        }

        if(connum == 3) {
            $('html, body').stop().animate({
                scrollTop: nowTop+800+'px'
            }, 2000);
        }

        if(connum == 4) {
            $('html, body').stop().animate({
                scrollTop: nowTop+1300+'px'
            }, 2000);
        }


        // $('.content').eq(connum).prev().offset().top;

    })


    // var currentPosition = parseInt($(".quick_btn").css("top"));
    // $(window).scroll(function () {
    //     var position = $(window).scrollTop(); /* 스크롤 값 가져와서 저장 */
    //     $(".quick_btn").stop().animate({
    //         "top": position + currentPosition + "px"
    //     }, 1000);
    // });


})