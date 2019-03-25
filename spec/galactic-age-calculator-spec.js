import GalacticAgeCalculator from "../src/galactic-age-calculator.js";

describe('GalacticAgeCalculator', function() {

  it('should test for user birth day "d1"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 0, 5);
    expect(galacticAgeCalculator.d1).toEqual(1);
  });

  it('should test for user birth month "m1"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 0, 5);
    expect(galacticAgeCalculator.m1).toEqual(2);
  });

  it('should test for user birth year "yr1"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 0, 5);
    expect(galacticAgeCalculator.yr1).toEqual(3);
  });

  it('should test for user health "health"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 0, 5);
    expect(galacticAgeCalculator.health).toEqual(0);
  });

  it('should test for the chosen celestial body "celestialBody"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 0, 5);
    expect(galacticAgeCalculator.celestialBody).toEqual(5);
  });

  it('should test if "planet(celestialBody)" returns valid response', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 0, 5);
    let celestialBody = 5;
    let planet = galacticAgeCalculator.planet(celestialBody);
    expect(planet).toEqual("Mars");
  });

  it('should test if "yearMultiplier(celestialBody)" returns valid response', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 0, 5);
    let celestialBody = 5;
    let yearMultiplier = galacticAgeCalculator.yearMultiplier(celestialBody);
    expect(yearMultiplier).toEqual(1.88);
  });

  it('should test if "lifeDuration(d1, m1, yr1) returns valid response"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 0, 5);
    let lifeDuration = galacticAgeCalculator.lifeDuration(galacticAgeCalculator.d1, galacticAgeCalculator.m1, galacticAgeCalculator.yr1).toFixed(2);
    expect(parseFloat(lifeDuration)).toEqual(2016.14);
  });

  it('should test for proper response for average health after life expectancy', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 0, 5);//Current year compared to is 2019
    let celestialBody = 5;
    let planet = galacticAgeCalculator.planet(celestialBody);
    let yearMultiplier = galacticAgeCalculator.yearMultiplier(celestialBody);
    let lifeDuration = parseFloat(galacticAgeCalculator.lifeDuration(galacticAgeCalculator.d1, galacticAgeCalculator.m1, galacticAgeCalculator.yr1).toFixed(2));
    let allCelestialAges = galacticAgeCalculator.celestialAge(galacticAgeCalculator.d1, galacticAgeCalculator.m1, galacticAgeCalculator.health, galacticAgeCalculator.celestialBody, lifeDuration, yearMultiplier, planet);
    expect(allCelestialAges).toEqual("You are 1072.41 years old on Mars and have lived 1029.86 years past your life expectancy. Good luck not living in fear.");
  });
});
