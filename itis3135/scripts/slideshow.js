$(document).ready(function() {
    var url;
    var title;
        // get the image URL and caption for each image
    $("a").each(function () {
        url=$(this).attr("href");
        title = $(this).attr("title");
    });
        // preload the image for each link
    (new Image()).src = this;
        // set up the event handlers for each link
    $("a").click(function(evt){
        // cancel the default action of each link
        url = $(this).attr("href");
        title = $(this).attr("title");
        $("#caption").text(title);
        $("img").attr("src",url);
        evt.preventDefault();
    });
    // move the focus to the second link
    $("a:eq(1)").focus();
}); // end ready