function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
$("#signup-button").click(function(e){
  var $email = $("#subscribe-email").val();
  if(validateEmail($email)){
    //alert("Valid email!");
    $(".message-content").html("Welcome! Thanks for your interest");
  }else{
    //alert("Invalid email!");
    $(".message-content").html("E-mail address is not valid.");
  }
  
  $(".subscribe-message").fadeIn(1500).css("display","block").delay(2000).fadeOut(500);
  e.preventDefault();
});
