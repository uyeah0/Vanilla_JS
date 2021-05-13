function sayHello(name, age){
    return console.log(`'Hello ${name} you have ${age} years of age.`);
}

const greetNicolas = sayHello("uyeah",18);
sayHello("uyeah0",18);
//console.log('Hi!');

const calculator = {
    plus : function(a,b){
        return a+b;
    }
}

//
const plus = calculator.plus(5,5);
console.log(plus);

//const title = document.getElementById("title"); 
// Document Object Model
console.log(title);

console.error("Fuck");
const title = document.querySelector("#title");

title.innerHTML = "Hi! From Js";
title.style.color = "red";
document.time = "I own you now"

function hadleResize(){
    console.log("I have been");
}
window.addEventListener("resize",hadleResize()) // 이벤트를 받기 기다리는 것
//handleResie호출 하는 것
//링크 클릭할 때 유용

function hadleClick(){
    title.style.color = "red";
}
title.addEventListener("click", handleClick)

