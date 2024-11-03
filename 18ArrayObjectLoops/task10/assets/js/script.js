// 10.Verilmiş array-in elementlerinden neçəsinin bir rəqəmi, neçəsinin iki rəqəmi, ve necesinin uc reqemi oldugunu tapan algrithm yazmaq



const arr=[1,2,3,4,775,6,7,88,77,12,3];
let onedigit=0;
let twodigit=0;
let thirddigit=0;

for (let i = 0; i < arr.length; i++) {
if(arr[i]<10 && arr[i]>=0){
    onedigit++;
}
    
else if(arr[i]>=10 && arr[i]<100)
{
    twodigit++;
}

else if(arr[i]>=100 && arr[i]<1000){
    thirddigit++;
}
else{
    alert("serti odemir");
}
}

alert(`verilmish arr=[1,2,3,4,775,6,7,88,77,12,3] \n 1-reqemli ${onedigit} dene\n2-reqemli ${twodigit}dene\n3-reqemli ${thirddigit}dene`)

