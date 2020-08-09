let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");


function removeParent(evt){
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	let target = getEventTarget(event);
	target.classList.toggle("done");
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	

	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(deleteButton);
	deleteButton.onclick = removeParent;
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);