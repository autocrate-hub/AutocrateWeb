let toastO=document.getElementById('toastO');
let toastI=document.getElementById('toastI');
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
// let toastMessage=(message,backgroundColor)=>{
//     if(backgroundColor){
//         toastI.style.background=backgroundColor;
//     }
//     setTimeout(()=>{
//         toastO.style.display='none';
//         console.log('none');
//     },5000)
// }

let myToastFun={};
myToastFun.id='toast1';
myToastFun.time=20;
myToastFun.text='Toast No 1';
toastCreate(myToastFun);