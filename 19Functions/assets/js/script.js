// 1.Hər biri 2 parametr qəbul edib və riyazi əməlləri yerinə yetiren funksiya yazin.
function sum(num1,num2) {
    return num1+num2;
}
function diff(num1,num2) {
    return num1-num2;
}

function multi(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
   
    if(num2===0){
        return "0-a bolme yoxdur";
    }
    return num1/num2;
}

function mod(num1,num2){
    return num1%num2;
}
console.log(`Toplama:${sum(2,4)}`);
console.log(`Cixma:${diff(2,4)}`);
console.log(`Bolme:${divide(2,4)}`);
console.log(`Vurma:${multi(2,4)}`);
console.log(`Qaliqli:${mod(2,4)}`);


// 2.Verilen parametrlerde tek ve cutlerin tapilmasi.(Rest operatoru istifade etmek)(14, 20, 35, 40, 57, 60, 100)


// let numbers=(...other) =>{
//     for (let i = 0; i < other.length; i++) {
//         if(other[i]%2==0){
//             console.log(`${other[i]} - Cutdur`) ;
//         }
//         else{
//           console.log(`${other[i]} - Tekdir`)   ;
//         }
        
//     }
 
// }

// (numbers(14, 20, 35, 40, 57, 60, 100));


// 3.Verilmis arreyde elementlerin həm 4-ə, həm də 5-ə bölününen elementlerin cemini tapin.[14, 20, 35, 40, 57, 60, 100]

// let divide=(arr)=>{
//     sum=0;
//     for (let i = 0; i <arr.length; i++) {
//       if(arr[i]%4==0 && arr[i]%5==0){
//         sum+=arr[i];
      
//       }
     
//     }
//     return sum;
// }


// let arr=[14, 20, 35, 40, 57, 60, 100];
// console.log(divide(arr));


// 4.Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded olduğunu tapan Proqramın alqoritmini yazin.

// let sentence = prompt("Cümlə daxil et:");
// let symbol = prompt("Simvol daxil et:");

// let isAvailable = (sentence, symbol) => {
//     let count = 0;
//     for (let i = 0; i < sentence.length; i++) { 
//         if (sentence[i] === symbol) {
//             count++;
//         }
    
//     }
//     if(count>0){
//          console.log(`${symbol} cümlədə ${count} dəfə var.`);
//     }
//     else{
//         console.log(`${symbol} cümlədə yoxduuuur`);
//     }
   
// }

// isAvailable(sentence, symbol); 


// 5.5.Daxil edilen ededin Aboundant ve ya Deficient oldugunu yoxlayan algorithm.(

// Abundant ədəd öz müsbət bolenlerinin(ozunden basqa) cəmi özündən böyük olan müsbət tam ədədlərə deyilir. Eks halda Deficient eded olur. 12-Aboundant, 13- Deficient)


// let num=Number(prompt("enter number"));
// function check(num) {
//     if (num <= 0) {
//         return "Zəhmət olmasa musbet ədəd daxil edin.";
//     }

//     let sum = 0;

//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }


//     if (sum > num) {
//         return `${num} - Abundant ədəd`;
//     } else {
//         return `${num} - Deficient ədəd`;
//     }
// }

// alert(check(num));






// 6.Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.


// let arr = [];
// let elementCount = Number(prompt("array nece elementli olacaq ?"));
// for (let i = 0; i < elementCount; i++) {
//     let element = Number(prompt(`Arrayin ${i + 1}-ci elementini daxil et:`));
//     arr.push(element);
// }



// let powerarr=(arr)=>{
//     let newarray=[];
// for (let i = 0; i < arr.length; i++) {
 
  
//     newarray[i]=arr[i]**2;
    
// }
// return newarray;

// }

// alert(`daxil etdiyin array:${arr}`);

// alert(`yeni array ${powerarr(arr)}`);

// 7.İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54]

// function diff(people) {
//     let maxage = 0; 
//     let minage = Infinity; 

//     for (let i = 0; i < people.length; i++) {
//         const age = people[i].age; 

//         if (age > maxage) {
//             maxage = age; 
//         }

//         if (age < minage) {
//             minage = age; 
//         }
//     }

//     const difference = maxage - minage; 

//     return [minage, maxage, difference]; 
// }

// let people = [
//     { name: "Arzu", age: 19 },
//     { name: "Leman", age: 13 },
//     { name: "Leyla", age: 67 },
//     { name: "Leyla", age: 20 },
// ];

// console.log(diff(people)); 
