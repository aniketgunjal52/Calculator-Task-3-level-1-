let num = document.getElementById('input_no')
let btn = document.querySelectorAll('button');

let string = "";
let arr = Array.from(btn);
arr.forEach(button =>{
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            num.value = string;
        }
        else if(e.target.innerHTML =='AC'){
            string = "";
            num.value =string;
        }
        else if(e.target.innerHTML == 'Del'){
            string = string.substring(0,string.length-1);
            num.value =string;
        }
        else{string += e.target.innerHTML;
            num.value = string
        }
       
       
    })
})