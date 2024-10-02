//------------------------------------------------------------------------------------------------
// Task N1.ilk 10 fib ededini tap
//-------------------------------------------------------------------------------------------------
let firstnum = 0; //ilk reqem
let secondnum = 1;  // ikinci reqem
let newfib;       // novbeti fib

console.log(firstnum);  
console.log(secondnum);  
for (let count = 2; count < 10; count++) { //2 den basladiram 8 i qalib deye
    newfib = firstnum + secondnum; 
    console.log(newfib); 
    firstnum = secondnum;  
    secondnum = newfib; 
}


// ikinci way kimi 

let num_1 = 0;
let num_2 = 1; 
let fib = ""; 


fib += num_1 + ", " + num_2;//ilki ikincini output 

for (let i = 2; i < 10; i++) { 
    let nextFib = num_1 + num_2; 
    fib += ", " + nextFib;
    num_1 = num_2; 
    num_2 = nextFib; 
}
console.log(fib);

//TaskN2 verilmis sozu tersine yazan alqoritm

//meselen arzu uzra

let word="arzu";
let newWord=' ';
for(let i=0; i<=word.length-1;i++){
       newWord+=word[word.length-1-i];//console.log(word[1]) r;

}

console.log(newWord);


// Task N3 1-dən 500-ə qədər tək ədədlərin cəmi ilə cüt ədədlərin cəminin fərqinin mənfi və ya müsbət olduğunu çap edən algotithm.

let num2 = 500;
let oddsum = 0;
let evensum = 0;
for (let i = 1; i <= num2; i++) {
    if (i % 2 === 0) {
        evensum += i;


    } else {
        oddsum += i;
    }
}

let diff=oddsum-evensum;
if(diff>0){
    console.log("positive");

}
else if(diff<0){
     console.log("negative");
}
else{
   console.log("error!!");
}