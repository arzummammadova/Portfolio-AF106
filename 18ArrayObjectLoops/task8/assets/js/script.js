// 8.Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.



alert("verilmis array 1,2,3,4,5,6,7,8,9,10")
const arr=[1,2,3,4,5,6,7,8,9,10];

let max=arr[0];
let min=arr[0];
let sum=0;

for (let i = 0; i < arr.length; i++) {

    if(arr[i]>max)
    {
          max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }
 
    
}


for (let i = 0; i < arr.length; i++) {
   if(arr[i]!==max && arr[i]!==min){
    sum+=arr[i];
   }
    
}


alert(`Max və min dəyərləri çıxmaqla elementlərin cəmi: ${sum}`);