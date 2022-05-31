$(document).ready(function () {
    var step = 1;
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
        $(".form10").animate({
            height: "toggle"
        });
    });
    $('#btn-step').click(function () {
        // $('.form9').toggle("slide", { direction: "right" }, 1000);
        if (step == 1) {
            $("#step").animate({
                height: "toggle"
            });
        } else if (step == 2) {
            $("#steponline").animate({
                height: "toggle"
            });
        } else if (step == 3) {
            $("#stepoffline").animate({
                height: "toggle"
            });
        }

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
        autoWidth: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 2,
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

    $("#step1").click(function () {
        // if($("#business-type").select2('val'))
        var businessType = $("#business-type").select2('val');
        if (businessType == 'khac') {
            $("#steponline").hide();
            $("#stepoffline").show();
            $("#step").hide();
            step = 3;
        } else {
            $("#steponline").show();
            $("#stepoffline").hide();
            $("#step").hide();
            step = 2;
        }
    });
    window.onscroll = function () {
        scrollFunction()
    };
    // khai báo hàm scrollFunction
    function scrollFunction() {
        // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            //nếu lớn hơn 20px thì hiện button
            document.getElementById("btn-back-to-top").style.opacity = 1;
        } else {
            //nếu nhỏ hơn 20px thì ẩn button
            document.getElementById("btn-back-to-top").style.opacity = 0;
        }
    }
});