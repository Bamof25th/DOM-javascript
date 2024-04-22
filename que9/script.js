var txtArea = document.querySelector("textarea");
var counter = document.querySelector("#counter");


txtArea.addEventListener("input", function () {
  counter.textContent = txtArea.value.length;
});
