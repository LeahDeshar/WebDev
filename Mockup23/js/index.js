const btn = document.querySelector("#btn");
const section = document.getElementById("modal");
const bar = document.querySelector(".side_bar");
const close = document.querySelector("#close");
btn.addEventListener("click", function () {
  bar.style.width = "290px";
  bar.style.display = "block";
  section.style.display = "block";
  section.classList.add("overlay");
});

close.addEventListener("click", function () {
  bar.style.width = "0";
  bar.style.display = "none";
  section.style.display = "none";
});
