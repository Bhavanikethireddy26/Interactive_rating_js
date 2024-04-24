const submit=document.querySelector(".submitbtn");
const card2=document.querySelector(".thankscard");
const button=document.querySelector(".number");
const rate1=document.querySelector("#rate1");
const rate2=document.querySelector("#rate2");
const rate3=document.querySelector("#rate3");
const rate4=document.querySelector("#rate4");
const rate5=document.querySelector("#rate5");
const p=document.querySelector(".rating");

const stylestatement1=function(number){
    switch (number){
        case 1:
            rate1.style.backgroundColor="#ccd5ae";
            p.textContent="You selected 1 out of 5"
            break;
        case 2:
            rate2.style.backgroundColor="#ccd5ae";
            p.textContent="You selected 2 out of 5"
            break;
        case 3:
            rate3.style.backgroundColor="#ccd5ae";
            p.textContent="You selected 3 out of 5"
            break;
        case 4:
            rate4.style.backgroundColor="#ccd5ae";
            p.textContent="You selected 4 out of 5"
            break;
        case 5:
            rate5.style.backgroundColor="#ccd5ae";
            p.textContent="You selected 5 out of 5"
            break;
    }

}

rate1.addEventListener("click",function(){
    stylestatement1(1);
})
rate2.addEventListener("click",function(){
    stylestatement1(2);
})
rate3.addEventListener("click",function(){
    stylestatement1(3);
})
rate4.addEventListener("click",function(){
    stylestatement1(4);
})
rate5.addEventListener("click",function(){
    stylestatement1(5);
})

submit.addEventListener("click", function(){
    card2.style.display="block";
})