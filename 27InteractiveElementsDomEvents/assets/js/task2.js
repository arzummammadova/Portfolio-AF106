const inputs=document.querySelectorAll(" .num-input input ");
const resultinput=document.querySelector(".result");
const addbtn=document.querySelector(".operations button:nth-child(1)");
const minusbtn=document.querySelector(".operations button:nth-child(2)");

const mult=document.querySelector(".operations button:nth-child(3) ");

const devide=document.querySelector(".operations button:nth-child(4) ");



addbtn.addEventListener("click",()=>{
    if(inputs[0].value===""&& inputs[1].value==="") {
        alert("Please Enter Number");
        return;
    }
    const num1=parseFloat(inputs[0].value) || 0;
    const num2=parseFloat(inputs[1].value) || 0;

    if(!isNaN(num1) && !isNaN(num2)){
        resultinput.value=num1+num2;
        inputs[0].value="";
        inputs[1].value="";
    }
    else{
        resultinput.value="Write True Enter Number";
        inputs[0].value="";
        inputs[1].value="";
    }
})

minusbtn.addEventListener("click",()=>{
    if(inputs[0].value===""&& inputs[1].value==="") {
        alert("Please Enter Number");
        return;
    }
    const num1=parseFloat(inputs[0].value) || 0;
    const num2=parseFloat(inputs[1].value) || 0;
    if(!isNaN(num1) && !isNaN(num2)){
        resultinput.value=num1-num2;
        inputs[0].value="";
        inputs[1].value="";
    }
    else{
        resultinput="Write True Enter Number";
        inputs[0].value="";
        inputs[1].value="";
    }
});

mult.addEventListener("click",()=>{
    if(inputs[0].value==="" && inputs[1].value===""){
        alert("Enter number please");
        return;
    } 
    const num1=parseFloat(inputs[0].value) || 0;
    const num2=parseFloat(inputs[1].value) || 0;
    if(!isNaN(num1) && !isNaN(num2)){
        resultinput.value=num1*num2;
        inputs[0].value="";
        inputs[1].value="";
    }
    else{
        resultinput.value="Write True Enter Number";
        inputs[0].value="";
        inputs[1].value="";
    }
})

devide.addEventListener("click",()=>{
    if(inputs[0].value==="" && inputs[1].value===""){
        alert("Enter number please");
        return;
    }
    num1=parseFloat(inputs[0].value) ||0;
    num2=parseFloat(inputs[1].value);
    if(num2===0){
        alert("0-a bolmek yoxdur basqa eded daxil et");
        return;
    }
    if(!isNaN(num1) && !isNaN(num2)){
        const result=num1/num2;
        resultinput.value = Number.isInteger(result) ? result : result.toFixed(2);
        inputs[0].value="";
        inputs[1].value="";
    }
    else{
        resultinput="Write True Enter Number";
        inputs[0].value="";
        inputs[1].value="";
    }
})

