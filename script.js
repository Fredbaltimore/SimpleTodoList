let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let deletedItem = document.getElementsByClassName("delete");
let listItem = ul.getElementsByTagName("li");



function removeParent(evt){
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

// for (let i = 0; i < deletedItem.length; i++){
// 	deletedItem[i].addEventListener("click", removeParent);
	
// }

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
	let deletebtn = document.createElement("button");
	deletebtn.innerHTML = "Delete";
	

	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(deletebtn);
	deletebtn.onclick = removeParent;
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