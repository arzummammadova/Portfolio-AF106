// 9.Verilmiş array-e daxil olunan ədədin arreyde olub olmadığını təyin edən proqram tərtib edin.

let arr=[1,2,3,4,5,6,7,8,9,10];
alert("verilmish array 1,2,3,4,5,6,7,8,9,10 ")
let num=Number(prompt("eded daxil et"));
let check=false;
for (let i = 0; i < arr.length; i++) {
    if(num===arr[i]){
        check=true;
        break;
    
        // alert(`$(num) verilmis arrayda var `);
    }
    // else{
    //     check===false;
        
    // }
    
}

if(check===true){
    alert(`${num} verilmis arrayda var `);
}

else{
    alert("bele bir eded arrayda yoxdur ");
}