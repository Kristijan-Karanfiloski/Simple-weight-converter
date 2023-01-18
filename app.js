const form = document.querySelector(".form");
const kgOrLbs = document.querySelector(".form__input--type");

//! KG AND LBS INPUTS

const kgInput = document.querySelector("#inputKg");
const lbsInput = document.querySelector("#inputLbs");
//!Output for when inputing kg

const grOutputK = document.querySelector("#grOutputK");
const lbsOutputK = document.querySelector("#lbsOutputK");
const ounceOutputK = document.querySelector("#ozOutputK");
//! output for when inputing lbs

const grOutputL = document.querySelector("#grOutputL");
const kgOutputL = document.querySelector("#kgOutputL");
const ounceOutputL = document.querySelector("#ozOutpuL");

//Getting the output idvs and making them hidden

const outputLbs = document.querySelector("#outputLbs");
const outputKg = document.querySelector("#outputKg");

outputLbs.style.display = "none";
outputKg.style.display = "none";

//! Makiong the inputs hidden

kgInput.style.display = "none";
lbsInput.style.display = "none";

kgOrLbs.addEventListener("input", function (e) {
  if (e.target.value === "kg") {
    kgInput.style.display = "block";
    lbsInput.style.display = "none";
  } else {
    kgInput.style.display = "none";
    lbsInput.style.display = "block";
  }
});

function kgConverter(e) {
  outputKg.style.display = "inline-block";
  outputLbs.style.display = "none";

  let kg = e.target.value;

  lbsOutputK.textContent = Math.floor(kg * 2.20462).toLocaleString("en-US");
  grOutputK.textContent = Math.floor(kg * 1000).toLocaleString("en-US");
  ounceOutputK.textContent = Math.floor(kg * 35.274).toLocaleString("en-US");
}

kgInput.addEventListener("input", kgConverter);

function lbsConverter(e) {
  outputLbs.style.display = "inline-block";
  outputKg.style.display = "none";

  let lbs = e.target.value;

  kgOutputL.textContent = Math.floor(lbs * 0.45359237).toLocaleString("en-US");
  grOutputL.textContent = Math.floor(lbs * 453.59).toLocaleString("en-US");
  ounceOutputL.textContent = Math.floor(lbs * 16).toLocaleString("en-US");
}

lbsInput.addEventListener("input", lbsConverter);
