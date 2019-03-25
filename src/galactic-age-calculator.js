export default class GalacticAgeCalculator {
  constructor(d1, m1, yr1, health, celestialBody) {
    this.d1 = d1;
    this.m1 = m1;
    this.yr1 = yr1;
    this.health = health;
    this.celestialBody = celestialBody;
  }

  planet(celestialBody) {
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
    else if (celestialBody == 7) {
      return "Saturn";
    }
    else if (celestialBody == 8) {
      return "Uranus";
    }
    else if (celestialBody == 9) {
      return "Neptune";
    }
    else if (celestialBody == 10) {
      return "Pluto";
    }
  }

  yearMultiplier(celestialBody) {
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
    else if (celestialBody == 7) {
      return 29.46;
    }
    else if (celestialBody == 8) {
      return 84;
    }
    else if (celestialBody == 9) {
      return 164.8;
    }
    else if (celestialBody == 10) {
      return 248.09;
    }
  }

  lifeDuration(d1, m1, yr1) {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let date = new Date();
    let dayCount = month[m1 - 1] - d1 + date.getDate();
    let yrCount = date.getFullYear() - yr1 - 1;
    let mDayCount = 0;
    for (let i = m1 + 1; i <= month.length; i++) {
      if ((yr1 % 4 === 0) && (yr1 % 100 !== 0) || (yr1 % 400 === 0)) {
        month[1] = 29;
      }
      else {
        month[1] = 28;
      }
      mDayCount += month[i - 1];
    }
    for (let i = 0; i < date.getMonth(); i++) {
      if ((date.getFullYear() % 4 === 0) && (date.getFullYear() % 100 !== 0) || (date.getFullYear() % 400 === 0)) {
        month[1] = 29;
      }
      else {
        month[1] = 28;
      }
      mDayCount += month[i];
    }
    return yrCount + parseFloat((mDayCount + dayCount) / 365);
  }

  celestialAge(d1, m1, health, celestialBody, lifeDuration, yearMultiplier, planet) {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (celestialBody == 0) {
      alert("Please select a celestial body");
    }
    else if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length) {
      return "That date doesn't exist!";
    }
    else if (celestialBody == 1) {
      return `How are you still alive? This is the Sun. All that you've lived is past your expectancy. The entire ${lifeDuration.toFixed(2)} years of your life don't make sense.`;
    }
    else if (celestialBody > 1 && health == 0) {
      if (lifeDuration < 80) {
        return `You are ${(lifeDuration / yearMultiplier).toFixed(2)} years old on ${planet} and have about ${parseFloat((80 / yearMultiplier) - (lifeDuration / yearMultiplier)).toFixed(2)} years left. Enjoy your remaining years.`;
      }
      else if (lifeDuration >= 80) {
        return `You are ${(lifeDuration / yearMultiplier).toFixed(2)} years old on ${planet} and have lived ${parseFloat((lifeDuration / yearMultiplier) - (80 / yearMultiplier)).toFixed(2)} years past your life expectancy. Good luck not living in fear.`;
      }
    }
    else if (celestialBody > 1 && health == 1) {
      if (lifeDuration < 100) {
        return `You are ${(lifeDuration / yearMultiplier).toFixed(2)} years old on ${planet} and have about ${parseFloat((100 / yearMultiplier) - (lifeDuration / yearMultiplier)).toFixed(2)} years left. Enjoy your remaining years.`;
      }
      else if (lifeDuration >= 100) {
        return `You are ${(lifeDuration / yearMultiplier).toFixed(2)} years old on ${planet} and have lived ${parseFloat((lifeDuration / yearMultiplier) - (100 / yearMultiplier)).toFixed(2)} years past your life expectancy. Good luck not living in fear.`;
      }
    }
    else if (celestialBody > 1 && health == 2) {
      if (lifeDuration < 5) {
        return `You are ${(lifeDuration / yearMultiplier).toFixed(2)} years old on ${planet} and have about ${parseFloat((5 / yearMultiplier) - (lifeDuration / yearMultiplier)).toFixed(2)} years left. Enjoy your remaining years.`;
      }
      else if (lifeDuration >= 5) {
        return `You are ${(lifeDuration / yearMultiplier).toFixed(2)} years old on ${planet} and have lived ${parseFloat((lifeDuration / yearMultiplier) - (5 / yearMultiplier)).toFixed(2)} years past your life expectancy. Good luck not living in fear.`;
      }
    }
  }
}
