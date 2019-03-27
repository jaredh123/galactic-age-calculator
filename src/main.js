import $ from 'jquery';
import GalacticAgeCalculator from './galactic-age-calculator.js'

$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    let galacticAgeCalculator = new GalacticAgeCalculator();

    let d1 = parseInt($("#day").val());
    let m1 = parseInt($("#month").val());
    let yr1 = parseInt($("#year").val());
    let health = parseInt($("#health").val());
    let celestialBody = parseInt($("#celestialBody").val());
    let date = new Date();
    let currentDate = parseInt(date.getDate());
    let currentMonth = parseInt(date.getMonth());
    let currentYear = parseInt(date.getFullYear());

    galacticAgeCalculator = new GalacticAgeCalculator(d1, m1, yr1, health, celestialBody, currentDate, currentMonth, currentYear);

    let planet = galacticAgeCalculator.planet(celestialBody);
    let yearMultiplier = galacticAgeCalculator.yearMultiplier(celestialBody);
    let lifeDuration = galacticAgeCalculator.lifeDuration(d1, m1, yr1, currentDate, currentMonth, currentYear);
    let allCelestialAges = galacticAgeCalculator.celestialAge(d1, m1, health, celestialBody, lifeDuration, yearMultiplier, planet);

    $("#result").text(allCelestialAges);
  });
});
