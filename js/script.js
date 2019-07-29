$(document).ready(function() {
    $("#title1").hide();
    $("#title2").hide();
    $("#title3").hide();
    $("#1stparagraph").hide();
    $("#2paragraph").hide();
    $("#3paragraph").hide();


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
$(document).ready(function() {
    $("#p1").hide();
    $("#prt1").animate({ opacity: 5 });
    $("#prt1").hover(function() {
        $(this).stop().animate({ opacity: 0.3 });
        $("#p1").fadeIn();
    }, function() {
        $(this).stop().animate({ opacity: 1 });
        $("#p1").fadeOut();

    });
    $("#p2").hide();
    $("#prt2").animate({ opacity: 5 });
    $("#prt2").hover(function() {
        $(this).stop().animate({ opacity: 0.3 });
        $("#p2").fadeIn();
    }, function() {
        $(this).stop().animate({ opacity: 1 });
        $("#p2").fadeOut();

    });
    $("#p3").hide();
    $("#prt3").animate({ opacity: 5 });
    $("#prt3").hover(function() {
        $(this).stop().animate({ opacity: 0.3 });
        $("#p3").fadeIn();
    }, function() {
        $(this).stop().animate({ opacity: 1 });
        $("#p3").fadeOut();

    });
    $("#p4").hide();
    $("#prt4").animate({ opacity: 5 });
    $("#prt4").hover(function() {
        $(this).stop().animate({ opacity: 0.3 });
        $("#p4").fadeIn();
    }, function() {
        $(this).stop().animate({ opacity: 1 });
        $("#p4").fadeOut();

    });
    $("#p5").hide();
    $("#prt5").animate({ opacity: 5 });
    $("#prt5").hover(function() {
        $(this).stop().animate({ opacity: 0.3 });
        $("#p5").fadeIn();
    }, function() {
        $(this).stop().animate({ opacity: 1 });
        $("#p5").fadeOut();

    });
    $("#p6").hide();
    $("#prt6").animate({ opacity: 5 });
    $("#prt6").hover(function() {
        $(this).stop().animate({ opacity: 0.3 });
        $("#p6").fadeIn();
    }, function() {
        $(this).stop().animate({ opacity: 1 });
        $("#p6").fadeOut();

    });
    $("#p7").hide();
    $("#prt7").animate({ opacity: 5 });
    $("#prt7").hover(function() {
        $(this).stop().animate({ opacity: 0.3 });
        $("#p7").fadeIn();
    }, function() {
        $(this).stop().animate({ opacity: 1 });
        $("#p7").fadeOut();

    });
    $("#p8").hide();
    $("#prt8").animate({ opacity: 5 });
    $("#prt8").hover(function() {
        $(this).stop().animate({ opacity: 0.3 });
        $("#p8").fadeIn();
    }, function() {
        $(this).stop().animate({ opacity: 1 });
        $("#p8").fadeOut();

    });


})
$(document).ready(function() {
    $("form").submit(function(event) {
        var a = $("#email").val();
        alert(a + " we have received your email and message.");
    });
});