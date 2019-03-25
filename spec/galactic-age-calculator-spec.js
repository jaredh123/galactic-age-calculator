import GalacticAgeCalculator from "../src/galactic-age-calculator.js";

describe('GalacticAgeCalculator', function() {

  it('should test for user birth day "d1"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 4, 5);;
    expect(galacticAgeCalculator.d1).toEqual(1);
  });

  it('should test for user birth month "m1"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 4, 5);;
    expect(galacticAgeCalculator.m1).toEqual(2);
  });

  it('should test for user birth year "yr1"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 4, 5);;
    expect(galacticAgeCalculator.yr1).toEqual(3);
  });

  it('should test for user health "health"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 4, 5);;
    expect(galacticAgeCalculator.health).toEqual(4);
  });

  it('should test for the chosen celestial body "celestialBody"', function() {
    let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 4, 5);;
    expect(galacticAgeCalculator.celestialBody).toEqual(5);
  });

  // it('should test for user birth day "d1"', function() {
  //   let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 4, 5);;
  //   expect(galacticAgeCalculator.d1).toEqual(1);
  // });
  //
  // it('should test for user birth day "d1"', function() {
  //   let galacticAgeCalculator = new GalacticAgeCalculator(1, 2, 3, 4, 5);;
  //   expect(galacticAgeCalculator.d1).toEqual(1);
  // });

});
