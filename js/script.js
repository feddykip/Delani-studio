$(document).ready(function(){
    $(".showing").click(function(){
        $(this).toggle();
        $(this).siblings().toggle();
    });
    $(".hidding").click(function(){
        $(this).siblings().toggle();
        $(this).toggle();
    });
    $(".toHover").hover(function(){
        $(this).find(".whenHover").show({opacity: 0.7});
    },
    function() {
        $(this).find(".whenHover").hide();
    });
    $("#submit").click(function() {
        var identity = $("#name").val();
        var email = $("#email").val();
        var message = $("#textareaFormControl").val();

        if(identity.length === 0 || email.length === 0 || message.length === 0) {
            alert("Input correct information");
        }
        else {
            alert("Hello! " + identity + ", Message from " + email+ " received");

        }
    });
});


