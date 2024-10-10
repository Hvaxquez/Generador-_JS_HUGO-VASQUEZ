/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "my phone", "the car"];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function getRandomNumber(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }
  function getRandom(anyArray) {
    let max = anyArray.length - 1;
    let min = 0;
    let Aleatorio = getRandomNumber(min, max);
    // return anyArray[Random];
    return anyArray[Aleatorio];
  }
  document.querySelector("#theexcuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when) +
    " ";
  console.log("Hello Rigo from the console!");
};
