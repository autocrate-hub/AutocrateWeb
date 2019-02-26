function toastTemplate(){
    var outerContainer = document.createElement('div');
    outerContainer.setAttribute("id","toast-block");
    var innerElement = document.createElement('div');
    innerElement.className = "toast-text";
    innerElement.textContent = this.msg;
    outerContainer.appendChild(innerElement);
    return outerContainer;
}

function toastPropsValidation(options){
    if(!validateProp(options, "msg", "string,number", true)){
        return false;
    }
    if(!validateProp(options, "delay", "number")){
        return false;
    }
    return true;
}

function showToast(){
    document.querySelector('body').appendChild(toastTemplate());
    document.getElementById(this.toastElementId).style.display = "block";
}

function hideToast(){
    setTimeout( ()=>{
        document.getElementById(this.toastElementId).style.display = "none";
    }, this.delay);
}

function start(){
    showToast();
    hideToast(); 
}

function initToast(options){
    this.toastElementId = "toast-block";
    if(toastPropsValidation(options)){
        this.msg = options.msg;
        this.delay = options.delay ? options.delay : 2000;      
    } else {
        alert("Please check the console for errors");
    }
}

function Toast(options){
    initToast(options);
    start();
}


var myToastFun={};
myToastFun.delay=2000;
myToastFun.msg='This toast will come handy to alert the user when something goes wrong';
setTimeout(function(){
	Toast(myToastFun);
},5000)


var myToastFunSecond ={};
myToastFunSecond.delay=4000;
setTimeout(function(){
	Toast(myToastFunSecond);
},7000)