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
    $('.accordion .collapse').on('shown.bs.collapse', function (e) {
        var $panel = $(this).closest('.accordion .card');
        $('html,body').animate({
            scrollTop: $panel.offset().top - 80
        }, 500);
    });

});