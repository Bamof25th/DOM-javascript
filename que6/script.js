var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var htext = document.querySelector("#hometxt");
var atext = document.querySelector("#abouttxt");
var ctext = document.querySelector("#contacttxt");

home.addEventListener("click", () => {
  hideAll();
  htext.style.display = "block";
  htext.style.width = "50%";
});
about.addEventListener("click", () => {
  hideAll();
  atext.style.display = "block";
  atext.style.width = "50%";
});
contact.addEventListener("click", () => {
  hideAll();
  ctext.style.display = "block";
  ctext.style.width = "50%";
});

function hideAll() {
  document.querySelectorAll("h3").forEach((e)=>{
    e.style.display = "none";
  })
}
