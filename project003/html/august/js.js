$(document).ready(function () {

    var interval = setInterval(fireInterval, 1000);
    let tt = 0;

    $('.cd_smoke').css({
        'opacity' : 0,
        'transform' : 'scale('+0+')'
    });

    function fireInterval() {
        tt++;

        if (tt == 15) {
            $('.cd_fire').animate({
                'opacity': 0
            }, 1000);

            $('.cd_img').animate({
                'opacity' : 0
            }, 1000);

            $('.black').animate({
                'opacity': 0.8
            }, 1000);
        }

        if (tt == 17) {
            $('.cd_light').animate({
                'opacity': 0
            }, 1000);
        }

        if (tt == 15) {
            $('.cd_smoke').animate({
                'opacity': 1,
                'transform' : 'scale('+1.0+')'
            }, 1000);
        }

        // console.log(tt);
    }

    setInterval(function(){
        tt = 0;

        $('.cd_fire').animate({
            'opacity': 0.8
        }, 1000);

        $('.cd_img').animate({
            'opacity' : 1
        }, 1000);

        $('.black').animate({
            'opacity': 0
        }, 1000);

        $('.cd_light').animate({
            'opacity': 1
        }, 1000);

        $('.cd_smoke').css({
            'opacity' : 0,
            'transform' : 'scale('+0+')'
        });

    },20000)
})