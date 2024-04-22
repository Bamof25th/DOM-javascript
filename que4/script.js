var input = document.querySelector("input");

var add = document.querySelector(".add");
var remove = document.querySelector(".remove");

var list = document.querySelector("ul");

var li;

// Add item to the list
add.addEventListener("click", function () {
  let val = input.value;
  if (val.trim() === "") {
  } else {
   li = document.createElement("li");
    // console.log(val)
    li.textContent = val;
    // console.log(li);
    list.appendChild(li);
    input.value = "";
  }
});
// remove Item from list
remove.addEventListener("click", function () {
  list.removeChild(li);
});
