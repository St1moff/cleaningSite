let select = document.querySelector(".select");
let selectTop = document.querySelector(".select__top");
let input = document.getElementById("select__input");
let options = document.querySelectorAll(".select__option");

selectTop.onclick = () => {
  select.classList.toggle("select--active");
};

options.forEach((e) => {
  e.addEventListener("click", () => {
    input.value = e.innerText;
    select.classList.remove("select--active");
    options.forEach((e) => {
      e.classList.remove("select__option--selected");
    });
    e.classList.add("select__option--selected");
  });
});

let select2 = document.querySelector(".select2");
let selectTop2 = document.querySelector(".select2__top");
let input2 = document.getElementById("select2__input");
let options2 = document.querySelectorAll(".select2__option");

selectTop2.onclick = () => {
  select2.classList.toggle("select2--active");
};

options2.forEach((e) => {
  e.addEventListener("click", () => {
    input2.value = e.innerText;
    select2.classList.remove("select2--active");
    options2.forEach((e) => {
      e.classList.remove("select2__option--selected");
    });
    e.classList.add("select2__option--selected");
  });
});

let select3 = document.querySelector(".select3");
let selectTop3 = document.querySelector(".select3__top");
let input3 = document.getElementById("select3__input");
let options3 = document.querySelectorAll(".select3__option");

selectTop3.onclick = () => {
  select3.classList.toggle("select3--active");
};

options3.forEach((e) => {
  e.addEventListener("click", () => {
    input3.value = e.innerText;
    select3.classList.remove("select3--active");
    options3.forEach((e) => {
      e.classList.remove("select3__option--selected");
    });
    e.classList.add("select3__option--selected");
  });
});
