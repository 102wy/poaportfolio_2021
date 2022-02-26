window.onload = function () {

    // 캐릭터 관련 코드
    var bar_1 = new ProgressBar.Line(character_br_1, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#fff6ec',
        trailWidth: 4,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#f7c050'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });
    var bar_2 = new ProgressBar.Line(character_br_2, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#fff6ec',
        trailWidth: 4,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#f7c050'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });
    var bar_3 = new ProgressBar.Line(character_br_3, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#fff6ec',
        trailWidth: 4,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#f7c050'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // 스킬 관련 코드
    var bar_ph = new ProgressBar.Circle(skill_ph, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#f7c050',
        trailColor: '#fff6ec',
        trailWidth: 6,
        svgStyle: null
    });
    var bar_il = new ProgressBar.Circle(skill_il, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#f7c050',
        trailColor: '#fff6ec',
        trailWidth: 6,
        svgStyle: null
    });
    var bar_html = new ProgressBar.Circle(skill_html, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#f7c050',
        trailColor: '#fff6ec',
        trailWidth: 6,
        svgStyle: null
    });
    var bar_css = new ProgressBar.Circle(skill_css, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#f7c050',
        trailColor: '#fff6ec',
        trailWidth: 6,
        svgStyle: null
    });
    var bar_js = new ProgressBar.Circle(skill_js, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#f7c050',
        trailColor: '#fff6ec',
        trailWidth: 6,
        svgStyle: null
    });




    AOS.init();

    // 마우스 휠 사용시 스크롤바 이동 관련
    var page_arr = ['.main', '.profile', '.redesign', '.publishing', '.work', '.story', '.aboutme', '.footer'];
    var page_index = 0;
    var page_speed = 700;
    var page_total = page_arr.length;
    var page_pos_arr = [];
    for (var i = 0; i < page_total; i++) {
        var tt = $(page_arr[i]).offset().top;
        page_pos_arr[i] = tt;
    }

    function movePage(_count) {
        $('html, body').stop().animate({
            scrollTop: page_pos_arr[_count]
        }, 600, function () {
            wheelActive = true;

            // console.log(page_index);
            if (page_index == 1) {
                bar_1.animate(0.95);
                bar_2.animate(0.90);
                bar_3.animate(0.85);
                bar_ph.animate(0.90);
                bar_il.animate(0.95);
                bar_html.animate(0.90);
                bar_css.animate(0.85);
                bar_js.animate(0.80);
            } else {
                bar_1.set(0.0);
                bar_2.set(0.0);
                bar_3.set(0.0);
                bar_ph.set(0.0);
                bar_il.set(0.0);
                bar_html.set(0.0);
                bar_css.set(0.0);
                bar_js.set(0.0);
            }

            navi_list.removeClass('navi-focus');
            navi_list.eq(page_index).addClass('navi-focus');



            // sw_redesign 관련 코드

            if (page_index == 2) {
                sw_redesign.autoplay.start();
            } else {
                // 1페이지로 보내고 멈춤
                sw_redesign.autoplay.stop();
                sw_redesign.slideTo(1);
            }

            // sw_publishing 관련 코드

            if (page_index == 3) {
                sw_publishing.autoplay.start();
            } else {
                // 1페이지로 보내고 멈춤
                sw_publishing.autoplay.stop();
                sw_publishing.slideTo(4);

            }

            // sw_story 관련 코드

            if (page_index == 5) {
                sw_story.autoplay.start();
            } else {
                // 1페이지로 보내고 멈춤
                sw_story.autoplay.stop();
                sw_story.slideTo(1);

            }
        });

        $('.scroll-img').scrollTop(0);
    }

    movePage(page_index);

    var wheelActive = true;
    var mobActive = false;

    $('.scroll-wrapper').mouseenter(function () {
        mobActive = true,
        wheelActive = false;
    });

    $('.scroll-wrapper').mouseleave(function () {
        mobActive = false,
        wheelActive = true;
    });


    $(window).bind('mousewheel DOMMouseScroll', function (event) {
        var distance = event.originalEvent.wheelDelta;
        if (distance == null) {
            distance = event.originalEvent.detail * -1;
        }

        if (wheelActive == false) {
            return;
        }
        wheelActive = false;
        if (distance < 0) {
            page_index++;
            if (page_index >= page_total) {
                page_index = page_total - 1;
            }
        } else {
            page_index--;
            if (page_index < 0) {
                page_index = 0;
            }
        }
        movePage(page_index);
    });



    // 주메뉴 이동 관련 코드
    $('.depth1 > li > a').click(function (e) {
        e.preventDefault();
        var temp = $(this).attr('page-index');
        page_index = temp;
        movePage(page_index);
    });

    // 사이드메뉴 이동 관련 코드
    var navi_list = $('.navi-list > li');
    $.each(navi_list, function (index, item) {
        $(this).click(function (e) {
            var temp = $(this).attr('page-index');
            page_index = temp;
            movePage(page_index);
        });
    });




    // 스크롤 바의 위치를 체크한다.
    // $(window).scroll(function() {
    //     var scY = $(window).scrollTop();
    //     if (scY > 920) {

    //         bar_1.animate(0.95);
    //         bar_2.animate(0.90);
    //         bar_3.animate(0.85);
    //         bar_ph.animate(0.90);
    //         bar_il.animate(0.95);
    //         bar_html.animate(0.90);
    //         bar_css.animate(0.85);
    //         bar_js.animate(0.80);

    //     } else {

    //         bar_1.animate(0);
    //         bar_2.animate(0);
    //         bar_3.animate(0);
    //         bar_ph.animate(0);
    //         bar_il.animate(0);
    //         bar_html.animate(0);
    //         bar_css.animate(0);
    //         bar_js.animate(0);
    //     }
    // });


    // 리디자인 swiper 관련
    var sw_redesign = new Swiper('.sw-redesign', {
        effect: 'fade',
        loop: true,
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".redesign-pagination",
            clickable: true,
        },
        slidesPerView: 1,
        //        centeredSlides: true,
        navigation: {
            nextEl: '.rd-next',
            prevEl: '.rd-prev',
        },
    });
    // 초기 설정 멈춤
    sw_redesign.autoplay.stop();

    var imac = $('.imac');
    var design_cover = $('.design-cover')

    imac.mouseenter(function () {
        design_cover.stop().fadeOut()
    });
    imac.mouseleave(function () {
        design_cover.stop().fadeIn()
    });

    // 퍼블리싱 swiper 관련
    var sw_publishing = new Swiper('.sw-publishing', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.pb-next',
            prevEl: '.pb-prev',
        },
        slidesPerView: 4,
    });
    // 초기 설정 멈춤
    sw_publishing.autoplay.stop();

    // 스토리 swiper 관련
    var sw_story = new Swiper('.sw-story', {
        effect: 'fade',
        loop: true,
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 3000,
        slidesPerView: 1,
        centeredSlides: true,
    });
    // 초기 설정 멈춤
    sw_story.autoplay.stop();

    // 위로 가기
    var goTop = $('.gotop');
    goTop.on('click', function () {

        // $('body').animate({
        //     scrollTop:0
        // },1000);
        page_index = 0;
        movePage(page_index);
    });

    // 모달창 관련
    var workBoxs = $('.works-box');
    var modal = $('.modal');
    var modalCont = $('.modal-cont')

    $.each(workBoxs, function(index,item){
        $(this).click(function(){
            modal.addClass('modal-focus');
            // modal.stop().fadeIn();
            modalCont.hide();
            modalCont.eq(index).show();
            modalCont.scrollTop(0);
            
            var temp = $('.modal').hasClass('modal-focus');
            if (temp == true) {
                wheelActive = false;
            } else {
                wheelActive = true;
            }
        });
    });

    $('.modal-button').click(function(){
        modal.removeClass('modal-focus');
        // modal.stop().fadeOut();
        wheelActive = true;
    });
    $('.modal').click(function(){
        modal.removeClass('modal-focus');
        // modal.stop().fadeOut();
        wheelActive = true;
    });
}
