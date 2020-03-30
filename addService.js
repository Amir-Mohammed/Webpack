class AddService {
  constructor() {
    this.numContainer = document.getElementById("numbers");
  }
  addInput() {
    this.numContainer.insertAdjacentHTML("beforeend","<input type='number' class='number' />");
  }
}

module.exports = {AddService};
