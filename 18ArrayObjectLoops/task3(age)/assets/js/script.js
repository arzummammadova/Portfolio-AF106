// .Verilmis userlerden ibaret arreyde yasi 30-dan boyuk ve kicik olanlari consola yazdirmaq.Break-Continue istifade ederek.


let userarr = [
    { name: "Arzu", age: 19 },
    { name: "Amin", age: 55 },
    { name: "Nuray", age: 20 },
  
    { name: "Aysel", age: 35 },
    { name: "Amin", age: 20 },
    { name: "Aylin", age: 30 },

];

for (let i = 0; i < userarr.length; i++ )
{
    let user = userarr[i];
     


    if(user.age>30){
        console.log(`30-dan boyuk name:${user.name}, age:${user.age}`);
        continue;
    }
     if(user.age<30){
        console.log(`30-dan kicik name: ${user.name},age:${user.age}`);
        continue;
    }

    if (user.age === 30) {
        console.log(`30-a beraberdir name:${user.name},age:${user.age}`);
        break;
    }

}

