
let testingContainer;

let element01 = [];

function Add(){
	testingContainer = document.querySelector(".testingContainer");
	element01.unshift("<div class=example>This is an example</div>");
	localStorage.setItem("EA-1", element01);
	testingContainer.innerHTML = localStorage.getItem("EA-1");



  console.log(localStorage); 
}
testingContainer = document.querySelector(".testingContainer");
element01.unshift(localStorage.getItem("EA-1"));
testingContainer.innerHTML = localStorage.getItem("EA-1");

