function grid(number) {
  const container = document.querySelector("#container");
  const totalSquares = number * number;
  container.style.setProperty("--number", number);
  if (number < 100) {
    for (let i = 0; i < totalSquares; i++) {
      const divs = document.createElement("div");
      divs.classList.add("divs");
      container.appendChild(divs);
    }
  } else {
    alert("Please insert a number between 0-100");
  }

  const divs = document.getElementsByClassName("divs");
  for (let div of divs) {
    div.addEventListener("mouseover", function () {
      this.style.backgroundColor = "yellow";
    });
    div.addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
    });
  }
}

const btn = document.querySelector("#btn");
const question = document.createElement("button");
question.setAttribute("id", "btn");
question.innerText = "Press to Decide";
btn.appendChild(question);

const bnt = document.querySelector("#btn");
bnt.addEventListener("click", () => {
  let numberImput = prompt("Number of squares per side of the new grid: ");
  let number = Number(numberImput);
  container.innerHTML = "";
  grid(number);
});
