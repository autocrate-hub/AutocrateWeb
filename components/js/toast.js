let toastO=document.getElementById('toastO');
let toastI=document.getElementById('toastI');
let myToastFun={};
let toastCreate=(val)=>{
    initToast(val);
    setTextToast(val.text);
}
let setTextToast=(val2)=>{
    toastI.innerHTML=val2;
}
let initToast=(val)=>{
    let timer;
    document.getElementById(val.id).addEventListener('click',()=>{
        toastO.style.display='flex';
        if(val.time){
        timer=val.time*1000;}
        else{
            timer=10000;
        }
    setTimeout(()=>{
        toastO.style.display='none';
        console.log(timer);
    },timer);
    })
}


myToastFun.id='toast1';
myToastFun.time=20;
myToastFun.text='Toast No 1';
toastCreate(myToastFun);