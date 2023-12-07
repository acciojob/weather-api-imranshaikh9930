//your JS code here. If required.
const btn = document.querySelector(".btn");
const txt = document.querySelector(".text");

btn.addEventListener("click", () => {
  txt.classList.toggle("text");
});
