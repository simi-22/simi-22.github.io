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
    },150)//내가 만들었지만 이해안감...

