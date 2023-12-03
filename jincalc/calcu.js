let string = " ";
const bttt = document.querySelectorAll(".button");
let inp = document.querySelector(".display");



bttt.forEach((userItem) => {
    userItem.addEventListener("click", function(){
        if(userItem.innerHTML == "="){
            string = eval(string);
            inp.value = string
        }
        else if(userItem.innerHTML == "C"){
            string = " ";
            inp.value = string;
        }
        else{
            string += userItem.innerHTML;
            inp.value = string
        }

    })
  });

