let display = document.querySelector('.display');
let clear = document.querySelector('.btnClear');
let back = document.querySelector('.backSpace');
let result = document.querySelector('.btnIgual');



function insert(num){
 display.value += num;
}

function clearInput(){
  display.value = ''
   }

   clear.addEventListener('click', () => {
    clearInput();
});

function backSpace(){
    display.value = display.value.slice(0, - 1);}

back.addEventListener('click', () =>{
    backSpace();
});

function calculate(){
 display.value = eval(display.value);
   
}

function pressEnter(){
 display.addEventListener('click', (e) => {
  if(e.keyCode === 13){
    calculate();
  }
 });
}



result.addEventListener('click', ()=>{
    calculate();
  
});
    



