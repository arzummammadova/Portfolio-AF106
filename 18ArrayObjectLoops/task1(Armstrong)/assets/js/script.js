// 1.Armstrong ededlerini yazan algorithm.(armstronq ədədləri bütün rəqəmlərinin kubunun toplamına bərabər olan ədədlərdir.)  153 1+125+27=153


let num=Number(prompt("eded daxil et:"));
let numstring=num.toString();//ayri ayri reqemi olmaq ucun
let sum=0;
let numdigit=numstring.length
for(let i=0;i<numdigit; i++){
    let digit=Number(numstring[i]);
    sum+=digit**numdigit;
}
if(num===sum){
    alert("bu eded armstrongdur");
}
else{
    alert(" armstrong deyil");
}




























// let num=prompt("eded daxil et :");
// let firstdigit=(num/100)|0;//1
// let seconddigit=((num/10)%10)|0;//5
// let thirddigit=(num%10)|0;//3

// let sum=firstdigit**3+seconddigit**3+thirddigit**3;
// if(sum==num){
//     alert("armstongdur");

// }

// else{
//     alert("deyil");
// }