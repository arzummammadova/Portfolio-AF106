// 2.Multiplication Table(1-10 vurma cedveli)

let table=' ';
for(let i=1; i<=10;i++){
    for(let j=1; j<=10;j++){
        let num=i*j;
      table+=`${i}*${j}=${num}\n`;
    }

  
}

console.log(table);//alertle cixanda cedvel tam gorsenmir 