var btn1 = document.querySelector("#start");
var btn2 = document.querySelector("#stop");
var h1 = document.querySelector("h1");
var counter = 0;
var int;
btn1.addEventListener("click", function () {
  int = setInterval(() => {
    h1.textContent = "timer :" + counter;
    counter++;
  }, 1000);
});

btn2.addEventListener('click', function(){
  clearInterval(int);
})