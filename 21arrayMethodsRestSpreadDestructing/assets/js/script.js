// 1.Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5,6,6,6,7,9];

function removeDuplicate(arr) {
  const removedArray = [...new Set(arr)];
  //set unikal deyeri saxlayir tekrarlananlari silir array qaytarir **
  const countDuplicate = arr.length - removedArray.length;

  return {
    removedArray,
    countDuplicate,
  };
}

console.log(removeDuplicate(arr));


// 2..Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq.

// function polintrome(word) {
//     if (word===word.split('').reverse().join('')) {
//         return "polindromdur";
//     }
//   else{
//     return "deyil";
//   }
// }
// const word='dad';
// console.log(polintrome(word));


//  3.3.Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.

// let num = Number(prompt("Enter a number:"));
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function smallCount(num, arr) {
//     return arr.filter(element => element < num).length;
// }

// console.log(smallCount(num, arr));


// // // 4.customers  array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.
// const customers = [
//   {
//     name: "Tyrone",
//     personal: {
//       age: 33,
//       hobbies: ["Bicycling", "Camping"],
//     },
//   },
//   {
//     name: "Elizabeth",
//     personal: {
//       age: 25,
//       hobbies: ["Guitar", "Reading", "Gardening"],
//     },
//   },
//   {
//     name: "Penny",
//     personal: {
//       age: 36,
//       hobbies: ["Comics", "Chess", "Legos"],
//     },
//   },
// ];
// const hobbiesarr = customers.reduce((acc, item) => {
//     return acc.concat(item.personal.hobbies);
  
// }, []);
// console.log(hobbiesarr);



// 5.5.Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek)
// function randomArrayOperartions () {
  
// let arr = [];
// const arrlength = 10;

// for (let i = 0; i < arrlength; i++) {
//     arr.push(Math.floor(Math.random() * 100) + 1);
// }

// let maxelement = Math.max(...arr);
// let minelement = Math.min(...arr);

// let sum = arr.reduce((acc, item) => acc + item, 0);
// let average = sum / arrlength;

// let square = arr.map(element => Math.pow(element, 2));
// return{
//   array:arr,
//   maxelement:maxelement,
//   minelement:minelement,
//   sum:sum,
//   average:average,
//   square:square
// }
// }
// const result=randomArrayOperartions();
// console.log(`Array: ${result.array}`);
// console.log(`Ən böyük element: ${result.maxelement}`);
// console.log(`Ən kiçik element: ${result.minelement}`);
// console.log(`Cəm: ${result.sum}`);
// console.log(`Ortalama: ${result.average}`);
// console.log(`Kvadratlar: ${result.square}`);



// 6.Object Destructing istifadə edərək employee  obyektindən name, department və contact (email, phone, emergencyContact sahələri daxil olmaqla) məlumatlarını əldə edin. Həmçinin emergencyContact-də name və relation məlumatı əldə edin.
// const employee = {
//   name: "Farid Ali",
//   department: "Engineering",
//   contact: {
//     email: "farid.ali@example.com",
//     phone: "555-1234",
//     emergencyContact: {
//       name: "Far For",
//       relation: "Spouse"
//     }
//   }
// };
// const { name, department, contact: { email, phone, emergencyContact: { name: emergencyContactName, relation: emergencyRelation } } } = employee;


// console.log(`name: ${name}`);
// console.log(`department: ${department}`);
// console.log(`email: ${email}`);
// console.log(`phone: ${phone}`);
// console.log(`emergencyContactName: ${emergencyContactName}`);
// console.log(`emergencyRelation: ${emergencyRelation}`);


