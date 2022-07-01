const btn = document.querySelector("#btn-main");
const select = document.querySelector("#select");

let randomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

const colors = ["red", "green", "blue"];

const changeColor = () => {
  let changes = (num1, num2, num3) => {
    return `rgb(${randomNumber(num1)}, ${randomNumber(num2)}, ${randomNumber(
      num3
    )})`;
  };
  let changeBgC = (num1, num2, num3) => {
    document.body.style.backgroundColor = changes(num1, num2, num3);
    btn.style.cssText = `background-color: ${changes(num1, num2, num3)}`;
  };

  if (select.value === colors[0]) {
    changeBgC(255, 0, 0);
  } else if (select.value === colors[1]) {
    changeBgC(0, 255, 0);
  } else if (select.value === colors[2]) {
    changeBgC(0, 0, 255);
  }
};

btn.addEventListener("click", changeColor);
