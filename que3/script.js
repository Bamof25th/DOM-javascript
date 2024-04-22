console.log("hey ,hello");

var submit = document.querySelector("form");
var p = document.querySelector(".en");
// var inp1 = document.querySelector("#name");
// var inp2 = document.querySelector("#email");

var inputs = document.querySelectorAll('input[type = "text"]');
// console.log(inputs)

submit.addEventListener("submit", function (e) {
  e.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      p.textContent = "Please fill All the  fields";
      p.style.color = "red";
      break;
    }
    p.style.color = "";
    p.textContent = "Submitted";
  }
});

// inputs.forEach((elem) => {
//     let elemvalue = elem.value;
//     if (elemvalue == "") {
//       p.textContent = "error feilds are blank";
//       p.style.color = "red";
//     } else {
//       p.style = "";
//       p.textContent = "Name & Email are submitted";
//     }
//   });

//   if (inp1.value === "" || inp2.value === "") {
//     p.textContent = "error feilds are blank";
//     p.style.color = "red";
//   } else {
//     var name = inp1.value;
//     var email = inp2.value;
//     p.style = ""
//     p.textContent = "Name: " + name + "\n Email:" + email;
//   }
