$(document).ready(function(){

  $("#destination").submit(function(event) {
    event.preventDefault();

    var sum = function(qOne, qTwo, qThree, qFour, qFive){
      return qOne + qTwo + qThree + qFour + qFive;
    };

    var qOne = parseInt($("#questionOne").val());
    var qTwo = parseInt($("#questionTwo").val());
    var qThree = parseInt($("#questionThree").val());
    var qFour = parseInt($("#questionFour").val());
    var qFive = parseInt($("#questionFive").val());
    var result = sum(qOne, qTwo, qThree, qFour, qFive);
      if (result < 17){
        $("#snow").show();
        $("form").hide();
        $("body").removeClass();
        $("body").addClass("snowPhoto");
      } else if (result < 25) {
        $("#beach").show();
        $("form").hide();
        $("body").removeClass();
        $("body").addClass("beachPhoto");
      } else if (result < 33) {
        $("#creative").show();
        $("form").hide();
      } else  {
        $("#party").show();
        $("form").hide();
      }

      // if (result < 17){
      //   alert("you are a snowbird");
      // } else if (result < 25) {
      //   alert("you are a beach bum")
      // } else if (result < 33) {
      //   alert("you are a creative retreat")
      // } else  {
      //   alert("you are a party animal!")
      // }
  });
});
