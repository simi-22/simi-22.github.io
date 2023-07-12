const saying = document.querySelector('.saying');

const content = `Life is either a daring adventure or nothing. 인생은 과감한 모험이거나 아무것도 아니다.`;
let count = 0;
let isStop = false;


let typingPrint = setInterval(function(){
    saying.innerHTML += content[count++];
    if(!isStop){
        if (count > 68) {
            clearInterval(typingPrint);
            //isStop = true;
        }}else{
            saying.innerHTML = '';
            count = 0;
        }
    },100)//내가 만들었지만 이해안감...



const welcomeBox = document.querySelector('#welcome-box');


const welcomeMove = () => {
    welcomeBox.classList.add('transparency')
    setTimeout(function(){
        welcomeBox.classList.add('hidden')
    },2000)
}

welcomeBox.addEventListener('click',function(){setTimeout(welcomeMove,500)})


const nextPageButton = document.querySelector('.n-btn-wrap')
console.log(nextPageButton)
const btnActive = () => {
    setTimeout(function(){
        nextPageButton.classList.add('active')
    },7000)
}
btnActive()