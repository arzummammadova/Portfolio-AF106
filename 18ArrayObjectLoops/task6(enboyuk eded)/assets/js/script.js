// .Verilmis array-de en boyuk ededin tapilmasi.


let arr=[1,2,3,4,5,6,7,8,9,10];
alert( "verilmis array [1,2,3,4,5,6,7,8,9,10]");

let max=arr[0];
for(let i=0;i<arr.length;i++){

    if(arr[i]>max){
        max=arr[i];
    }
 
}
alert(`Maximum eded :${max}`);
// console.log(max);

