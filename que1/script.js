//

var btn = document.querySelector('.download');

btn.textContent = "start"
// .innerHTML += "<i>  yo bro</i>, Hey its Dom"
var h1 = document.querySelector("h1")

// h1.style.color = "red";
// h1.style.fontSize = "20px";


h1.classList.add("makeitred")
// h1.classList.remove("makeitred")

btn.addEventListener('click', function(){
    h1.textContent = "Hey Its Domenic!";
})