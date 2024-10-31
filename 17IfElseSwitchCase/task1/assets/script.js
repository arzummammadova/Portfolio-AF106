

// Task:
// 1) Yanacaq Alışı Hesablayıcısı: 
//  Yanacağın alınmasını simulyasiya edən və seçilmiş yanacağın növünə və alınmış yanacağın miqdarına əsasən qalan balansı hesablayan JavaScript proqramını yazın.



const dizel = 0.9;
const benzin = 1;
const premium = 1.5;

let fuelnum = parseInt(prompt("1-Dizel \n2-Benzin \n3-Premium \n Choose fuel type:"));
let currentvalue; 

if (fuelnum >= 1 && fuelnum <= 3) {
    let litr = parseInt(prompt("Enter fuel litr "));//parsefloat da olar
    let money = parseInt(prompt("Enter your money with AZN:"));

    switch (fuelnum) {
        case 1: 
            currentvalue = dizel * litr;
            break;
        case 2: 
            currentvalue = benzin * litr;
            break;
        case 3: 
            currentvalue = premium * litr;
            break;
    }

    if (currentvalue <= money) {
        let remaining = money - currentvalue;
        alert(`Your money is ok \n My money: ${remaining} AZN`);
    } else {
        let deficit = currentvalue - money;
        alert(`Current value: ${currentvalue} AZN\n Your money: ${money} AZN\n Missing money(Yetersiz mebleg): ${deficit} AZN`);

        // ${currentvalue.toFixed(2) burda meselen qiymet uzun cixanda bunu yazib yuvarlaqlasdira bilerik yeni 5.77777 5.78 olar
    }
} else {
    alert("Lütfən, düzgün yanacaq növü daxil edin.");
}
