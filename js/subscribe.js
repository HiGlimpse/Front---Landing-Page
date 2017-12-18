function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
$("#signup-button").click(function(e){
  var $email = $("#subscribe-email").val();
  var $first = $("#first-name").val();
  var $last = $("#last-name").val();
  if(validateEmail($email)){
    $.ajax({
        url:'/subscription',
        type:'post',
        datatype:'jsonp',
        data:{
          'first':$first ,
          'last': $last,
          'email':$email
        },
        success:function(response){
            $(".message-content").html(response.msg);
        },
        error: function(response){
          $(".message-content").html(response.msg);
        }
    });
  }
  else{
    //alert("Invalid email!");
    $(".message-content").html("E-mail address is not valid.");
  }

  $(".subscribe-message").fadeIn(1500).css("display","block").delay(2000).fadeOut(500);
  e.preventDefault();
});


//TYPEWRITER JS ---------------------------------------------------

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "tedious.", "stressful.","time consuming.", "complicated."];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.getElementById("typingtext").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 1500);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
   else if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
