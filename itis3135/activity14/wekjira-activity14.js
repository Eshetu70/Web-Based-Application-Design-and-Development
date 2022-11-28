$(document).ready(function() {
$("#nav_list a").click(function(evt) {
    buildName = "json_files/" + $(this).attr("title") + ".json";
    console.log(buildName);
    document.getElementById("main").innerHTML = "";
    $.getJSON(buildName, function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#main").append(
                    "<h1>" + value.title + "</h2>" +
                    "<img src='" + value.image + "'>" +
                    "<h2>" + value.month + "<br>" + value.speaker + "</h2>" +
                    "<p>" + value.text + "</p>"
                );
            }); // inner each       
        }); // outer each
}); // end of getJSON           
}); 
})// end click    
