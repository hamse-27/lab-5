"use-strict";

const theForm = document.getElementById("the-form")
const theDate = document.getElementById("date")
const getDate = document.querySelector('input[type="date"]')
const x = theDate.innerText;
const color = document.getElementById("colour")
const value = document.getElementById("the-value")
const theRange = document.getElementById("range")

getDate.addEventListener("change", showDate)


function showDate() {
  const d = new Date(getDate.value);
  parseDate(d)
}

function parseDate(d){
theDate.innerText = `${x} ${d.toDateString()}`;
}

let today = new Date();
parseDate(today);

function setColor(){
  value.style.backgroundColor = color.value
}

theForm.addEventListener("input", setColor)

setColor();

theRange.addEventListener("input", rangeAction)

function rangeAction(){
  value.innerText = theRange.value
  value.style.width = `${theRange.value}%`
}
