$(document).ready(function () {
    $('.js-business-type').select2({
        placeholder: "Doanh nghiệp tư nhân",
    });
    $('.js-select3').select2({
        placeholder: "Quận/Huyện",
    });

    $('.js-select4').select2({
        placeholder: "Tỉnh / Thành phố",
    });
    $('.js-icon-help-1').click(function () {
        $(".accordion-help-1__card1").slideToggle("slow");
        if ($(".js-icon-help-1").hasClass("show")) {
            $(".js-icon-help-1").removeClass("show")
            $('.js-icon-help-1 img').attr("src", "./images/icon-help-1.png");
        } else {
            $(".js-icon-help-1").addClass("show")
            $('.js-icon-help-1 img').attr("src", "./images/icon-help-2.png");
        }
    });
    $('.btn-hero-1').click(function () {
        // $('.form9').toggle("slide", { direction: "right" }, 1000);
        $(".form9").animate({
            height: "toggle"
        });
    });
    $('.accordion2 .collapse').on('shown.bs.collapse', function (e) {
        var $panel = $(this).closest('.accordion2 .card');
        $('html,body').animate({
            scrollTop: $panel.offset().top - 80
        }, 500);
    });
    $("#btn-back-to-top").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(".discover2 .owl-carousel").owlCarousel({
        margin: 24,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            480: {
                items: 3,
            },
            768: {
                items: 3,
                dots: true
            }
        }
    });
    $(".gird3 .owl-carousel").owlCarousel({
        margin: 6,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            480: {
                items: 3,
            },
            768: {
                items: 3,
                dots: true
            }
        }
    });
});