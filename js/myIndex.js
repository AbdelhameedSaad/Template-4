$(document).ready(function() {


    let aboutOffset = $(".about").offset().top;
    $(window).scroll(
        function() {
            let wScroll = $(window).scrollTop();

            if (aboutOffset = wScroll) {
                $("#btnUp").fadeIn(500);
            } else {
                $("#btnUp").fadeOut(500);
            }
        }
    );

    $("#btnUp").click(function() {
        $("body,html").animate({ scrollTop: "0" }, 1000);
    });


    $("a[href^='#']").click(function() {
        let aHref = $(this).attr("href");
        $("body,html").animate({ scrollTop: $(aHref).offset().top }, 1000);
    });




    $("#loading .sk-cube-grid").fadeOut(1500, function() {
        $("body").css("overflow", "auto");

        $(this).parent().fadeOut(1500, function() {

            $(this).remove();
        });

    });
});