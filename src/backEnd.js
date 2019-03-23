$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var d1 = parseInt($("#day").val());
    var m1 = parseInt($("#month").val());
    var yr1 = parseInt($("#year").val());
    var health = parseInt($("#health").val());
    var celestialBody = parseInt($("#celestialBody").val());

    var date = new Date();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var earthYears = function() {
      var dayCount = month[m1 - 1] - d1 + date.getDate();
      var yrCount = date.getFullYear() - yr1 - 1;
      var mDayCount = function() {
        var count = 0;
        for (var i = m1 + 1; i <= month.length; i++) {
          if ((yr1 % 4 === 0) && (yr1 % 100 !== 0) || (yr1 % 400 === 0)) {
            month[1] = 29;
          }
          else {
            month[1] = 28;
          }
          count += month[i - 1];
        }
        for (var i = 0; i < date.getMonth(); i++) {
          if ((date.getFullYear() % 4 === 0) && (date.getFullYear() % 100 !== 0) || (date.getFullYear() % 400 === 0)) {
            month[1] = 29;
          }
          else {
            month[1] = 28;
          }
          count += month[i];
        }
        return count;
      }
      if (d1 > month[m1 - 1] || m1 > (month.length) || date.getDate() > month[(date.getMonth() + 1) - 1] || (date.getMonth() + 1) > (month.length)) {
        return "That date doesn't exist!";
      }
      else {
        return yrCount + parseFloat(((mDayCount() + dayCount) / 365).toFixed(2));
      }
    }
    $("#result").text(earthYears());
  });
});
