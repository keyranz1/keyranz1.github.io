$(window).on("load", function () {
    $('.loader .inner').fadeOut(500, function () {
        $('.loader').fadeOut(500);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            queue: false,
            easing: 'linear'
        }
    });
})

$(document).ready(function () {

    $().timelinr({
        autoPlay: 'true',
        autoPlayDirection: 'forward',
        arrowKeys: 'true'
    });

    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false,
        animation_easing: 'linear'
    });

    var typed = new Typed(".typed", {
        strings: ['Learner.', 'Web Developer.', 'App Developer.', 'Technology Enthusiast.'],
        loop: true,
        typeSpeed: 70,
        backSpeed: 15,
        showCursor: false,
        startDelay: 500
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    })

    var skillLists = [
        { skillName: 'HTML', percent: 95, content: 'Used in almost all of my web project' },
        { skillName: 'CSS', percent: 91, content: 'Used in almost all of my web project' },
        { skillName: 'Javascript', percent: 83, content: 'Used in almost all of my web project' },
        { skillName: 'PHP', percent: 74, content: 'Used in almost all of my web project' },
        { skillName: 'C#', percent: 70, content: 'Used in almost all of my web project' },
        { skillName: 'C', percent: 65, content: 'Used in almost all of my web project' },
        { skillName: 'Ionic', percent: 79, content: 'Used in almost all of my web project' },
        { skillName: 'SQL', percent: 55, content: 'Used in almost all of my web project' }
    ]
    for (var i = 0; i < skillLists.length; i++) {
        // var element = document.createElement("div").className("skill");
        // document.getElementById("skillC").appendChild(element);
    }

    var skillOffset = $('.skillsSection').offset().top;
    var statsOffset = $('.statsSection').offset().top;
    var countupFinished = false;
    $(window).scroll(function () {
        if (window.pageYOffset > skillOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 160,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if (!countupFinished && window.pageYOffset > statsOffset - $(window).height() + 200) {
            $('.counter').each(function () {
                var ele = $(this);
                var endVal = parseInt(ele.text());
                ele.countup(endVal);
            })
            countupFinished = true;
        }
    });


    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({
            scrollTop: targetPosition - 50
        }, "slow");
    })

    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                queue: false,
                easing: 'linear'
            }
        });

        return false;
    });

    var data = [
        {
            time: '2015-03-29',
            header: 'Sample of header',
            body: [{
                tag: 'h1',
                content: "Lorem ipsum"
            },
            {
                tag: 'p',
                content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
            }],
            footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>'
        },
        {
            time: '2015-04-15',
            body: [{
                tag: 'h1',
                content: "Basic content"
            },
            {
                tag: 'p',
                content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.  See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>'
            }],
        },
        {
            time: '2016-01-20',
            body: [{
                tag: 'img',
                attr: {
                    src: '../img/qrcode.png',
                    width: '150px',
                    cssclass: 'img-responsive'
                }
            },
            {
                tag: 'h2',
                content: 'Sample with image'
            },
            {
                tag: 'p',
                content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
            }]
        },
        {
            time: '2013-01-20',
            body: [{
                tag: 'img',
                attr: {
                    src: '../img/girl.png',
                    width: '100px',
                    cssclass: 'img-responsive'
                }
            },
            {
                tag: 'h2',
                content: 'Sample with image rigth'
            },
            {
                tag: 'p',
                content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
            }]
        }
    ];
    
    $(document).ready(function () {
    
        $('#myTimeline').albeTimeline(data, {
            effect: "zoomIn",
            showMenu: true
        });
    
    });

});