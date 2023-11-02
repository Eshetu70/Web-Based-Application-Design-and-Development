$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "facultyList.json",
        beforeSend: function() {
            $("#faculty").html("Loading...");
        },
        timeout: 10000,

        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#faculty").html("");
            $.each(data,function(){
                $.each(this,function(key,value){
                    var xmlDoc = $(this);
                    $("#faculty").append("<h3>" +
                      "<img src='" + value.image + "'>" + "<h2>"+
                        value.full_name + "</h3>" +
                        value.department + "<p>" +
                        value.bio + "<br>");
                });
            });

        }
    });
});
