const clickbutton=()=>{
    let val1 = document.getElementById('val1');
    let val2 = document.getElementById('val2');
    val1 = Number(val1.value)
    val2 = Number(val2.value)

    result=val1+val2
    console.log(result)
    
    let element=document.getElementById("result");
    element.textContent=result;



};