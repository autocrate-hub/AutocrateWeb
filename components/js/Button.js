var Button = function(options){
	initializeOptions(options);
	let element = document.getElementById(options.containerClass);
	element.innerHTML = render();
	registerEvents();
}

var initializeOptions = function(options){
	this.color = options.color;
	this.element = options.id;
	this.buttonText = options.buttonText;
	this.containerClass = options.containerClass;
	this.onButtonClick = options.onButtonClick;
	this.bgColor = options.bgColor;
}

var registerEvents = function(){
	document
	.getElementById(this.element)
	.addEventListener("click", this.onButtonClick);
}

var render = function(){
	return (
		`<div class="btn-container ${this.containerClass}">
			<div class="btn-text" id="${this.element}">
				${this.buttonText}
			</div>
		</div>`
	);
}

var o = {};
o.id = "btn-block";
o.containerClass = "button-container";
o.buttonText = "Button";
o.onButtonClick = function(){alert("Button Clicked")}
Button(o);
