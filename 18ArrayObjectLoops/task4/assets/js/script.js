// .Arraye daxil edilən 10 ədədin ededi ortasini tapan proqramın alqoritmi yazmaq.(While loop ile)


sum=0;
count=0;

while (count<10) {
   let num=Number(prompt(`${count+1}-ci ededi daxil et: `));
   sum+=num;
   count++;
}

let average=sum/count;

alert(average);