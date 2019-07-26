$(document).ready(function() {
    $("#title1").hide();
    $("#title2").hide();
    $("#title3").hide();
    $("#1stparagraph").hide();
    $("#2paragraph").hide();
    $("#3paragraph").hide();
});

$(document).ready(function() {
    $("#pic1,label").click(function() {
        $("#pic1").hide();
        $("label").hide();
        $("#title1").show();
        $("#1stparagraph").show();

    });
    $("#1stparagraph").click(function() {
        $("#title1").hide();
        $("#1stparagraph").hide();
        $("#pic1").show();
        $("label").show();
    });
});

$(document).ready(function() {
    $("#dev").click(function() {
        $("#dev").hide();
        $("label").hide();
        $("#title2").show();
        $("#2paragraph").show();
    });
    $("#2paragraph").click(function() {
        $("#2paragraph").hide();
        $("#title2").hide();
        $("#dev").show();
        $("label").show();
    });
});
$(document).ready(function() {
    $("#product").click(function() {
        $("#product").hide();
        $("label").hide();
        $("#title3").show();
        $("#3paragraph").show();
    });
    $("#3paragraph").click(function() {
        $("#3paragraph").hide();
        $("#title3").hide();
        $("#product").show();
        $("label").show();
    });
});