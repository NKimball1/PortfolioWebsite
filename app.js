'use strict';

console.log('JavaScript Running');

let today = new Date().toDateString();
let dateElement = document.getElementById('date');
dateElement.innerHTML = today;
