//default values
this.onButtonClick = function(){};
this.buttonText = "Click";

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
	if(propsValidation(options)){
		this.element = options.id;
		this.buttonText = options.buttonText ? options.buttonText : this.buttonText;
		this.containerId = options.containerId;
		this.onButtonClick = options.onButtonClick ? options.onButtonClick : this.onButtonClick;
	} else {
		alert("Please check the console for errors");
	}
}
var propsValidation = function(options){
	var isValid = true;
	if(!validateProp(options, "id", "string", true)) //true : required
	{
		return false;
	}
	if(!validateProp(options, "containerId", "string", true)) //true : required
	{
		return false;
	}
	if(!validateProp(options, "onButtonClick", "function"))
	{
		return false;
	}
	if(!validateProp(options, "buttonText", "string"))
	{
		return false;
	}
	return true;
}
var registerEvents = function(){
	document
	.getElementById(this.element)
	.addEventListener("click", this.onButtonClick);
}
var renderButton = function(){
	let element = document.getElementById(this.containerId);
	element.innerHTML = template();
}


var obj = {
	id: "my-demo-btn",
	containerId: "button-container",
	buttonText: "My Button",
	onButtonClick: function(){ alert("my button was clicked"); }
}

new Button(obj);