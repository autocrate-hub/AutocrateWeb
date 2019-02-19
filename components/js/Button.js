var Button = function(options){
	initializeOptions(options);
	renderButton();
	registerEvents();
}

var template = function(){
	return (
		`<div class="btn-container">
			<div class="btn-block" id="${this.element}">
				<span class="btn-text">${this.buttonText}</span>
			</div>
		</div>`
	);
}

var initializeOptions = function(options){
	this.element = options.id;
	this.buttonText = options.buttonText;
	this.containerClass = options.containerClass;
	this.onButtonClick = options.onButtonClick;
}

var registerEvents = function(){
	document
	.getElementById(this.element)
	.addEventListener("click", this.onButtonClick);
}

var renderButton = function(){
	let element = document.getElementById(this.containerClass);
	element.innerHTML = template();
}

var o = {};
o.id = "btn-demo";
o.containerClass = "button-container";
o.buttonText = "Button";
o.onButtonClick = function(){alert("Button Clicked")}
Button(o);
console.log(element);
