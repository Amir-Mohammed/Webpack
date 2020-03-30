import Calc from "../calculator";
import "../main.scss";
const {AddService} = require("../addService");

const addBtn = document.getElementById("addBtn");
const sumBtn = document.getElementById("sumBtn");
const mulBtn = document.getElementById("mulBtn");
const resultBox = document.getElementById("result");

const addInputs = new AddService();
const calculator = new Calc();

addBtn.addEventListener("click", () => {
  addInputs.addInput();
});

sumBtn.addEventListener("click", () => {
  resultBox.textContent = calculator.onSum();;
});

mulBtn.addEventListener("click", () => {
  resultBox.textContent = calculator.onMul();;
});

