const input = document.querySelector("input");

const data = [
  {
    name: "aniket",
    src: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg",
  },
  {
    name: "dhoni",
    src: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg",
  },
  {
    name: "virat",
    src: "https://cdn.pixabay.com/photo/2015/11/06/11/43/businessman-1026415_640.jpg",
  },
  {
    name: "chahal",
    src: "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg",
  },
  {
    name: "rohit",
    src: "https://cdn.pixabay.com/photo/2024/03/24/13/57/cute-8653209_640.jpg",
  },
  {
    name: "rohan",
    src: "https://cdn.pixabay.com/photo/2024/03/24/13/57/cute-8653209_640.jpg",
  },
  {
    name: "roshan singh",
    src: "https://cdn.pixabay.com/photo/2024/03/24/13/57/cute-8653209_640.jpg",
  },
  {
    name: "anish",
    src: "https://cdn.pixabay.com/photo/2024/03/24/13/57/cute-8653209_640.jpg",
  },
  {
    name: "anil",
    src: "https://cdn.pixabay.com/photo/2024/03/24/13/57/cute-8653209_640.jpg",
  },
];

input.addEventListener("input", function () {
  const l = data.filter((e) => {
    return e.name.startsWith(input.value);
  });
  var pers = "";
  l.forEach(function (e) {
    pers += ` <div class="person">
   <div class="img">
       <img src=${e.src} alt="img" >
   </div>
   <h4>${e.name}</h4>
</div>`;
  });

  document.querySelector(".people").innerHTML = pers;
});
