const counter=document.querySelector("#count");
let count=0;


function increment(){
    count++;
    counter.value=count;
}



function decrement(){
    if(count>1){
        count--;
        counter.value=count;
    }
}
    



