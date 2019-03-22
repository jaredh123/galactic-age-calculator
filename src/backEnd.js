$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var d1 = parseInt($("#day").val());
    var m1 = parseInt($("#month").val());
    var yr1 = parseInt($("#year").val());
    var health = parseInt($("#health").val());

    var date = new Date();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var earthYears = function() {
      var dayCount = month[m1 - 1] - d1 + date.getDate();
      var mCount;
      var yrCount;

      if ((month.length - m1 + date.getMonth() -1) >= 12) {
        mCount = month.length - m1 + date.getMonth() - 13;//Earth month count part 1/2
        yrCount = date.getFullYear() - yr1;//Earth year count part 1/2
      }
      else {
        mCount = month.length - m1 + date.getMonth() - 1;//Earth month count part 2/2
        yrCount = date.getFullYear() - yr1 - 1;//Earth year part 2/2
      }
      if (d1 > month[m1 - 1] || m1 > (month.length) || date.getDate() > month[date.getMonth() - 1] || date.getMonth() > (month.length)) {
        return "That date doesn't exist!";//False dates
      }
      else {
        return yrCount + mCount + dayCount;//Earth full year count part 1/1
      }
    }


    $("#result").text(date);
  });
});
