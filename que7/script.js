var prg = document.querySelector("#progress");
var dc = document.querySelector("h3");
let count = 0;
const int = setInterval(() => {
  if (count === 100) {
    clearInterval(int);
    dc.style.opacity = "1";
  }
  count++;

  prg.style.width = count + "%";
}, 35);
