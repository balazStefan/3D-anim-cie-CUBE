const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const btnUp = document.querySelector(".btnUp");
const btnDown = document.querySelector(".btnDown");
const btnFront = document.querySelector(".btnFront");
const btnBack = document.querySelector(".btnBack");
const cube = document.querySelector(".cube");
const currentSide = "";

btnLeft.addEventListener("click", function (e) {
  e.preventDefault();
  cube.classList.add("left");
  cube.classList.remove("back", "right", "up", "front", "down");
  btnLeft.classList.add("btnActive");
  btnRight.classList.remove("btnActive");
  btnUp.classList.remove("btnActive");
  btnDown.classList.remove("btnActive");
  btnBack.classList.remove("btnActive");
  btnFront.classList.remove("btnActive");
});

btnRight.addEventListener("click", function (e) {
  e.preventDefault();
  cube.classList.add("right");
  cube.classList.remove("left", "back", "up", "front", "down");
  btnLeft.classList.remove("btnActive");
  btnRight.classList.add("btnActive");
  btnUp.classList.remove("btnActive");
  btnDown.classList.remove("btnActive");
  btnBack.classList.remove("btnActive");
  btnFront.classList.remove("btnActive");
});

btnUp.addEventListener("click", function (e) {
  e.preventDefault();
  cube.classList.add("up");
  cube.classList.remove("left", "right", "back", "front", "down");
  btnLeft.classList.remove("btnActive");
  btnRight.classList.remove("btnActive");
  btnUp.classList.add("btnActive");
  btnDown.classList.remove("btnActive");
  btnBack.classList.remove("btnActive");
  btnFront.classList.remove("btnActive");
});
btnDown.addEventListener("click", function (e) {
  e.preventDefault();
  cube.classList.add("down");
  cube.classList.remove("left", "right", "up", "front", "back");
  btnLeft.classList.remove("btnActive");
  btnRight.classList.remove("btnActive");
  btnUp.classList.remove("btnActive");
  btnDown.classList.add("btnActive");
  btnBack.classList.remove("btnActive");
  btnFront.classList.remove("btnActive");
});

btnFront.addEventListener("click", function (e) {
  e.preventDefault();
  cube.classList.add("front");
  cube.classList.remove("left", "right", "up", "back", "down");
  btnLeft.classList.remove("btnActive");
  btnRight.classList.remove("btnActive");
  btnUp.classList.remove("btnActive");
  btnDown.classList.remove("btnActive");
  btnBack.classList.remove("btnActive");
  btnFront.classList.add("btnActive");
});

btnBack.addEventListener("click", function (e) {
  e.preventDefault();
  cube.classList.add("back");
  cube.classList.remove("left", "right", "up", "front", "down");
  btnLeft.classList.remove("btnActive");
  btnRight.classList.remove("btnActive");
  btnUp.classList.remove("btnActive");
  btnDown.classList.remove("btnActive");
  btnBack.classList.add("btnActive");
  btnFront.classList.remove("btnActive");
});
