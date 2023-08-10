import "./style.css";

function component() {
	const a = document.createElement("h2");
	a.innerHTML = "hello my guy";
	a.classList.add("hello");

	return a;
}

document.body.appendChild(component());
