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

    var fullAge = function() {
      var planet = function() {
        if (celestialBody == 2) {
          return "Mercury";
        }
        else if (celestialBody == 3) {
          return "Venus";
        }
        else if (celestialBody == 4) {
          return "Earth";
        }
        else if (celestialBody == 5) {
          return "Mars";
        }
        else if (celestialBody == 6) {
          return "Jupiter";
        }
      }

      var yearMultiplier = function() {
        if (celestialBody == 2) {
          return 0.24;
        }
        else if (celestialBody == 3) {
          return 0.62;
        }
        else if (celestialBody == 4) {
          return 1;
        }
        else if (celestialBody == 5) {
          return 1.88;
        }
        else if (celestialBody == 6) {
          return 11.86;
        }
      }

      var lifeDuration = function() {
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
        return yrCount + parseFloat((mDayCount() + dayCount) / 365);
      }

      var celestialAge = function() {
        if (celestialBody == 0) {
          alert("Please select a celestial body");
        }
        else if (celestialBody == 1) {
          return "How are you still alive? This is the Sun. All that you've lived is past your expectancy. The entire " + lifeDuration().toFixed(2) + " years of your life don't make sense.";
        }
        else if (celestialBody > 1 && health == 0) {
          if (lifeDuration() < 80) {
            return "You are " + (lifeDuration() / yearMultiplier()).toFixed(2) + " years old on " + planet() + " and have about " + parseFloat((80 / yearMultiplier()) - (lifeDuration() / yearMultiplier())).toFixed(2) + " years left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 80) {
            return "You are " + (lifeDuration() / yearMultiplier()).toFixed(2) + " years old on " + planet() + " and have lived " + parseFloat((lifeDuration() / yearMultiplier()) - (80 * yearMultiplier())).toFixed(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else if (celestialBody > 1 && health == 1) {
          if (lifeDuration() < 100) {
            return "You are " + (lifeDuration() / yearMultiplier()).toFixed(2) + " years old on " + planet() + " and have about " + parseFloat((100 / yearMultiplier()) - (lifeDuration() / yearMultiplier())).toFixed(2) + " years left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 100) {
            return "You are " + (lifeDuration() / yearMultiplier()).toFixed(2) + " years old on " + planet() + " and have lived " + parseFloat((lifeDuration() / yearMultiplier()) - (100 * yearMultiplier())).toFixed(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else if (celestialBody > 1 && health == 2) {
          if (lifeDuration() < 5) {
            return "You are " + (lifeDuration() / yearMultiplier()).toFixed(2) + " years old on " + planet() + " and have about " + parseFloat((5 / yearMultiplier()) - (lifeDuration() / yearMultiplier())).toFixed(2) + " years left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 5) {
            return "You are " + (lifeDuration() / yearMultiplier()).toFixed(2) + " years old on " + planet() + " and have lived " + parseFloat((lifeDuration() / yearMultiplier()) - (5 * yearMultiplier())).toFixed(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
      }
      return celestialAge();
    }

    $("#result").text(fullAge());
  });
});
