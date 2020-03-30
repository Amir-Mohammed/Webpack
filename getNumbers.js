export function getNumbers() {
  const numbers = [];
  const inputs = document.getElementsByClassName("number");
  for (const input of inputs) {
    numbers.push(+input.value)
  }
  return numbers
}