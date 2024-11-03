// 7.Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin
// debugger
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = arr[0];
let min = arr[0];
let maxindex=0;
let minindex=0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxindex=i;
     
    }
      if(arr[i]<min) {
        min = arr[i];
        minindex=i;
    
    }
    
   
}
 arr[maxindex]= min;
    arr[minindex] = max;

alert(arr);