let toastTemplate = () => {
    let outerContainer = document.createElement('div');
    outerContainer.setAttribute("id","toast-block");
    let innerElement = document.createElement('div');
    innerElement.className = "toast-text";
    innerElement.textContent = this.msg;
    outerContainer.appendChild(innerElement);
    return outerContainer;
}

let toastPropsValidation = (options)=> {
    if(!validateProp(options, "msg", "string,number", true)){
        return false;
    }
    if(!validateProp(options, "delay", "number")){
        return false;
    }
    return true;
}

let showToast = () => {
    document.querySelector('body').appendChild(toastTemplate());
    document.getElementById(this.toastElementId).style.display = "block";
}

let hideToast = () => {
    setTimeout( ()=>{
        document.getElementById(this.toastElementId).style.display = "none";
    }, this.delay);
}

let start = () => {
    showToast();
    hideToast(); 
}

let initToast = (options)=>{
    this.toastElementId = "toast-block";
    if(toastPropsValidation(options)){
        this.msg = options.msg;
        this.delay = options.delay ? options.delay : 2000;      
    } else {
        alert("Please check the console for errors");
    }
}

let Toast = (options) => {
    initToast(options);
    start();
}

let myToastFun={};
myToastFun.delay=2000;
myToastFun.msg='This toast will come handy to alert the user when something goes wrong';
Toast(myToastFun);