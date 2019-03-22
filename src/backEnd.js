$(document).ready(function() {

  // var health = $("#health").val();

  $("#run").submit(function(event) {
    event.preventDefault();

    var d1 = parseInt($("#day").val());
    var m1 = parseInt($("#month").val());
    var yr1 = parseInt($("#year").val());

    var d2 = 21;
    var m2 = 3;
    var yr2 = 2019;

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var earthAge = function() {
      var totalCalCount = function() {
        var dayCount = month[m1 - 1] - d1 + d2;
        var mCount;
        var yrCount;
        if ((month.length - m1 + m2 -1) >= 12) {
          mCount = month.length - m1 + m2 - 13;
          yrCount = yr2 - yr1;
        }
        else {
          mCount = month.length - m1 + m2 - 1;
          yrCount = yr2 - yr1 - 1;
        }
        if (d1 > month[m1 - 1] || m1 > (month.length) || d2 > month[m2 - 1] || m2 > (month.length)) {
          return "That date doesn't exist!";
        }
        else {
          return "You are " + yrCount + " years, " + mCount + " months, and " + dayCount + " days old on Earth";
        }
      }
      return totalCalCount();
    }
    $("#result").text(earthAge());
  });
});
