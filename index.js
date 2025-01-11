

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const amOrpm = document.querySelector(".amOrpm");


const run=()=>{

const date = new Date();

let hours = date.getHours();
let seconds = date.getSeconds();
let minutes = date.getMinutes();

    if(date.getHours() > 12){
        amOrpm.innerText ="pm";
        hours -= 12;
    }else{
        amOrpm.innerText ="pm";
    };

hour.innerText = hours < 10 ? "0" + hours : hours;
min.innerText = minutes < 10 ? "0" + minutes : minutes;
sec.innerText = seconds < 10 ? "0" + seconds : seconds;

    requestAnimationFrame(run);
};

requestAnimationFrame(run);

setInterval(()=>{

    console.log("See you when your a senior dev comfort! from you 2025 to you 20 whenever ^_^!!");
    
}, 500000000);