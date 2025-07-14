let input = document.querySelector("#inputBox");
let btns = document.querySelectorAll("button");
let string = "";

let arr = Array.from(btns);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      //eval is js in built function
      string = eval(string);
      input.value = string;
      string = "";
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      input.value = string.slice(0, -1);
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
