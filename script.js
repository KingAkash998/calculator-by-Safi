let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.btn');


let string = "";

let buttonsArray = Array.from(buttons);

buttonsArray.forEach(button =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ''
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length - 1);
            input.value = string;
        }
        else{
            string += e.target.innerText;
            input.value = string;
        }
    })
});

