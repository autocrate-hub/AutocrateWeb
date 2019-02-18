let toastO=document.getElementById('toastO');
let toastI=document.getElementById('toastI');

let toastMessage=(message,backgroundColor)=>{
    if(backgroundColor){
        toastI.style.background=backgroundColor;
    }
    toastI.innerHTML=message;
    toastO.style.display='flex';
    setTimeout(()=>{
        toastO.style.display='none';
        console.log('none');
    },5000)
}