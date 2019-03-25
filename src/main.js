import $ from 'jquery';
import GalacticAgeCalculator from './galactic-age-calculator.js'
// import './styles.css';

$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let galacticAgeCalculator = new GalacticAgeCalculator();

    let d1 = parseInt($("#day").val());
    let m1 = parseInt($("#month").val());
    let yr1 = parseInt($("#year").val());

    let health = parseInt($("#health").val());

    let celestialBody = parseInt($("#celestialBody").val());

    $("#result").text(celestialAge());
  });
});
