
$(document).ready(function() {
    $("#accordion").accordion(
        {
            collapsible:true,
            heightStyle: "content",

        }
    );
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 300,
        captions: true,
        slideHeight: 300,
        pause:2000,
        pager:true,
        pagerType:"short"


    });



});