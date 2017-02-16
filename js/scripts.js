$(function(){
  $("#formOne").submit(function() {
    event.preventDefault();
    var input1 = $("input:radio[name=question1]:checked").val();
    var input2 = $("input:radio[name=question2]:checked").val();
    var input3 = $("input:radio[name=question3]:checked").val();

    $(".quizResult p").hide();
    
    if (input1 === "yes" && input2 === "obama" && input3 === "yes") {
      $("#liberal").show();
    } else if (input1 === "no" && input2 === "reagan" && input3 === "no") {
      $("#conservative").show();
    } else {
      $("#moderate").show();
    };

  });

});
