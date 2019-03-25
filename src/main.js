import $ from 'jquery';
import GalacticAgeCalculator from './galactic-age-calculator.js'
// import './styles.css';

$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    let galacticAgeCalculator = new GalacticAgeCalculator();

    let d1 = parseInt($("#day").val());
    let m1 = parseInt($("#month").val());
    let yr1 = parseInt($("#year").val());
    let health = parseInt($("#health").val());
    let celestialBody = parseInt($("#celestialBody").val());

    galacticAgeCalculator = new GalacticAgeCalculator(d1, m1, yr1, health, celestialBody);

    let planet = planet(celestialBody);
    let yearMultiplier = yearMultiplier(celestialBody);
    let lifeDuration = lifeDuration(d1, m1, yr1);
    let allCelestialAges = galacticAgeCalculator.celestialAge(d1, m1, health, celestialBody, lifeDuration, yearMultiplier, planet);

    $("#result").text(allCelestialAges);
  });
});
