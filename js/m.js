const saying = document.querySelector('.saying');

const content = `Life is either a great adventure or nothing. 인생은 위대한 모험이거나 아무것도 아니다.`;
let count = 0;
let isStop = false;


let typingPrint = setInterval(function(){
    saying.innerHTML += content[count++];
    if(!isStop){
        if (count > 67) {
            clearInterval(typingPrint);
            //isStop = true;
        }}else{
            saying.innerHTML = '';
            count = 0;
        }
    },100)//내가 만들었지만 이해안감...



const welcomeBox = document.querySelector('#welcome-box');
const intro = document.querySelector('#intro');


const welcomeMove = () => {
    welcomeBox.classList.add('transparency')
    setTimeout(function(){
        welcomeBox.classList.add('hidden')
        intro.classList.add('active')
    },2000)
}

welcomeBox.addEventListener('click',function(){setTimeout(welcomeMove,500)})


const nextPageButton = document.querySelector('.n-btn-wrap')
console.log(nextPageButton)
const btnActive = () => {
    setTimeout(function(){
        nextPageButton.classList.add('active')
    },3000)
}
btnActive()