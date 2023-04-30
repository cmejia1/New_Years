"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/

// call the function to run and display the countdown clock
runClock();
// use the setInterval() method to keep runClock() going
setInterval("runClock()", 1000);
// function to create and run the countdown clock
function runClock() {
   // store the current date and time
   let currentDay = new Date();
   let dateStr = currentDay.toLocaleDateString();
   let timeStr = currentDay.toLocaleTimeString();

   // Display the current date and time 
   document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;

   // calculate the days until january 1st
   let newYear = new Date("January 1 2018");
   let nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   let dayLeft = (newYear - currentDay) / (1000*60*60*24);

   // calculate the hours in the current day
   let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   // caculate the minutes and seconds in the current hour
   let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   // Display time left until new years eve 
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById('secs').textContent = Math.floor(secsLeft);
}