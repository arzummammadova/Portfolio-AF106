// Girilen ededin istenilen edede göre modunu(%) tapan algoritm yazmaq.
// Verilmiş array: let arr = [203, 19, 2, 13, 196, 86, 35, 77,]



let arr = [203, 19, 2, 13, 196, 86, 35, 77,];
alert("verilmis array: arr = [203, 19, 2, 13, 196, 86, 35, 77,]");
let num=Number(prompt("Bolmek ucun eded daxil et "));
let arrl = arr.length;
let result=" ";

for (let i = 0; i < arrl; i++) {
    let mod = arr[i] % num;
    // result+=` Element: ${arr[i]} bolen :${num} Modu: ${mod}\n`;
    result+=`${arr[i]} %${num} = ${mod} (modu)\n`;
}

alert(result);

