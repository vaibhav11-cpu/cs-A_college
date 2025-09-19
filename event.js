function RED(){
    document.querySelector("#red").style.background="red";
}
let val=0;
function plus(){
    val++;
    if(val>=10) document.querySelector('#c').innerText= "max";
   else{ document.querySelector('#c').style.color="red";
    document.querySelector('#c').textContent= val; 
   }
}
function minus(){
    val--;
    if(val<=0) document.querySelector('#c').innerText= "min";
   else{ document.querySelector('#c').style.color="red";
    document.querySelector('#c').textContent= val; 
   }
}