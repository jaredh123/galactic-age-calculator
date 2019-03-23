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

    var celestialAge = function() {
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

      if (celestialBody == 0) {
        alert("Please select a celestial body");
      }
      else if (celestialBody == 1) {
        return "the Sun";
      }
      else if (celestialBody == 2) {
        if (health == 0) {
          if (lifeDuration() < 80) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((80 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 80) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (80 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else if (health == 1) {
          if (lifeDuration() < 100) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((100 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 100) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (100 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else {
          if (lifeDuration() < 5) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((5 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 5) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (5 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
      }
      else if (celestialBody == 3) {
        if (health == 0) {
          if (lifeDuration() < 80) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((80 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 80) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (80 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else if (health == 1) {
          if (lifeDuration() < 100) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((100 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 100) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (100 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else {
          if (lifeDuration() < 5) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((5 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 5) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (5 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
      }
      else if (celestialBody == 4) {
        if (health == 0) {
          if (lifeDuration() < 80) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((80 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 80) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (80 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else if (health == 1) {
          if (lifeDuration() < 100) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((100 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 100) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (100 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else {
          if (lifeDuration() < 5) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((5 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 5) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (5 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
      }
      else if (celestialBody == 5) {
        if (health == 0) {
          if (lifeDuration() < 80) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((80 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 80) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (80 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else if (health == 1) {
          if (lifeDuration() < 100) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((100 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 100) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (100 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else {
          if (lifeDuration() < 5) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((5 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 5) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (5 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
      }
      else if (celestialBody == 6) {
        if (health == 0) {
          if (lifeDuration() < 80) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((80 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 80) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (80 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else if (health == 1) {
          if (lifeDuration() < 100) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((100 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 100) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (100 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
        else {
          if (lifeDuration() < 5) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have about " + parseFloat((5 * xxxxxMultiplier) - (lifeDuration() / xxxxxMultiplier)).toFix(2) + " left. Enjoy your remaining years.";
          }
          else if (lifeDuration() >= 5) {
            return "You are " + (lifeDuration() / xxxxxMultiplier).toFix(2) + " years old on xxxxxPlanet and have lived " + parseFloat((lifeDuration() / xxxxxMultiplier) - (5 * xxxxxMultiplier)).toFix(2) + " years past your life expectancy. Good luck not living in fear.";
          }
        }
      }


    }
    $("#result").text(celestialAge());
  });
});
