/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/



let myP = document.querySelector("p");


myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};


document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("I'am Cloned");
  }
});