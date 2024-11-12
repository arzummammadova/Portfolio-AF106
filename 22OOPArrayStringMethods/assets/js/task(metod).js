// 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// (Array method-lardan istifadə edin)
// Example:
// console.log(getFirst([1, 73, 99, 20])) -> 1
// console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// console.log(getFirst([1, 73, 99, 20], 0)) -> []
// console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]
// const getFirst=function (array,n) {
//     if (array === null || array === undefined) {
//         return 0;

//     }
//     if (n === null || n === undefined) {
//         return array[0];
//     }
//     if(n < 0){
//         return [];
//     }
//     return array.slice(0, n);
// }
// console.log(getFirst([1, 73, 99, 20])) ;
// console.log(getFirst([1, 73, 99, 20], 2)) ;
// console.log(getFirst([1, 73, 99, 20], 0));
// console.log(getFirst([1, 73, 99, 20], 4)) ;


// 2. Write a simple JavaScript function to join all elements of the following array into a string.
// console.log(join([1, 73, 99, 20], "*")) -> 1*73*99*20
// console.log(join([1, 73, 99, 20], "/")) -> 1/73/99/20

// const join=function (array,n) {
//     return array=array.join(n)

// }
// console.log(join([1, 73, 99, 20], "*"))
// console.log(join([1, 73, 99, 20], "/"));



// 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// Example:
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN


// const convert = function (str) {
//     newstr = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toLowerCase()) {
//             newstr += str[i].toUpperCase();

//         }
//         else {
//             newstr += str[i].toLowerCase();
//         }

//     }

//    return newstr;  

// }


//   console.log(convert('saLamNecesen'));
//   console.log(convert('arzU'));


// 4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]

// const clear=function  (array) {
//     const filteredarray=array.filter(Boolean);
//     return filteredarray;

// }


// console.log(clear([0, 1, false, 2, undefined, '', 3, null]));


// 6. Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true


// const isEqual = function(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])); 
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]));  
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]));  
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]));



// 7. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

// const charStirng =function (char,str) {
//     let indexes=[];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i]===char) {
//             indexes.push(i);
//         }


//     }

//     if (indexes.length==0){
//         return -1;
//     }
//     let sum=indexes.reduce((acc,curr)=>acc+curr,0);
//     return indexes.join('+') + '='+sum;

// }
// console.log(charStirng('a',"salam"));
// console.log(charStirng('b',"salam"));
// console.log(charStirng('c',"salam"));


// 8. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir. Və daxil olunmuş indeksə əsasən göndərilmiş string-i həmin array-ə əlavə edib return etsin. Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini 3cu indekse elave etmelidir, eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.

// const indexbasic=function (array,index,str) {
//     if (index<array.length){
//         array.splice(index, 0, str)
//     }
//     else{
//         array.push(str); 
//     }

//     return array;



// }

// console.log( indexbasic(['a','salam','b','world'], 3, "dev" ));


// 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.



// const unitearray = function (arr1, arr2, char) {
//     let newarray = arr1.concat(arr2);
//     return newarray.join(char);
// }

// console.log(unitearray([1, 2], [3, 4], '*'));


// 10.
// studentlərin ortalama score'nu yeni bir arrayda yığın
//   [
//   { name: "Ali", scores: [90, 85, 92] },
//   { name: "Davud", scores: [100, 100, 100] },
//   { name: "Mammal", scores: [75, 80, 85] },
//   { name: "Camil", scores: [90, 95, 85] },
//   ]


// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
// ];

// const averageStudents = students.map(student => {
//     const totalScore = student.scores.reduce((acc, score) => acc + score, 0);
//     const averageScore = totalScore / student.scores.length;
//     return { name: student.name, average: averageScore };
// });

// console.log(averageStudents);


// 11.const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
//   ];
//   # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

// const newArray=function  () {
//    let  newarr=[];
//     const webTechs = [
//         "HTML",
//         "CSS",
//         "JS",
//         "React",
//         "JS",
//         "Redux",
//         "Node",
//         "JS",
//         "MongDB",
//       ];
//     for (let i = 0; i < webTechs.length; i++) {
//        if (webTechs[i].length > 4) {
//             newarr.push(webTechs[i]);
//         }

//     }
//     return newarr;

// }

// console.log(newArray());



// 12.
// const products = [
//   {
//     id: 1,
//     title: "Smartphone",
//     description: "A high-end smartphone with the latest features.",
//     price: 799.99,
//   },
//   {
//     id: 2,
//     title: "Laptop",
//     description: "Powerful laptop with a large screen and fast processor.",
//     price: 1299.99,
//   },
//   {
//     id: 3,
//     title: "Coffee Maker",
//     description: "An automatic coffee maker with a built-in grinder.",
//     price: 99.99,
//   },
//   {
//     id: 4,
//     title: "Headphones",
//     description: "Wireless over-ear headphones with noise-cancellation.",
//     price: 199.99,
//   },
//   {
//     id: 5,
//     title: "Smart TV",
//     description: "55-inch 4K Smart TV with streaming apps built-in.",
//     price: 699.99,
//   },
// ];
// # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın


// const products = [
//     {
//         id: 1,
//         title: "Smartphone",
//         description: "A high-end smartphone with the latest features.",
//         price: 799.99,
//     },
//     {
//         id: 2,
//         title: "Laptop",
//         description: "Powerful laptop with a large screen and fast processor.",
//         price: 1299.99,
//     },
//     {
//         id: 3,
//         title: "Coffee Maker",
//         description: "An automatic coffee maker with a built-in grinder.",
//         price: 99.99,
//     },
//     {
//         id: 4,
//         title: "Headphones",
//         description: "Wireless over-ear headphones with noise-cancellation.",
//         price: 199.99,
//     },
//     {
//         id: 5,
//         title: "Smart TV",
//         description: "55-inch 4K Smart TV with streaming apps built-in.",
//         price: 699.99,
//     },
// ];

// const calculate = function (products) {
//     const sumtotal = products.reduce((acc, product) => acc + product.price, 0);

//     const average = sumtotal / products.length;
//     return { sumtotal, average }
// }
// const { sumtotal, average } = calculate(products); 
// console.log("Total price: " + sumtotal);
// console.log("Average price: " + average);





// 13.let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
// countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın



// let finda=function(countries){
//     return countries.filter(country=>country.startsWith('A')&& country.endsWith('a'));
// }

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
// console.log(finda(countries));

// 14.Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// function findNumberOfDivisors(n){
//     return [...Array(n)].map((value,i)=>i+1).filter(i => n % i === 0).length;
// }

// console.log(findNumberOfDivisors(5));

//metodsuzz
// function findNumberOfDivisors(n) {
//     let count = 0;
//     for (let i = 1; i <=n; i++) {
//         if (n % i === 0) {
//             count++;
//         }

//     } return count;
// }

// console.log(findNumberOfDivisors(5));


// School Management System  
// Sadə bir məktəb idarəetmə sistemi qurduğunuzu təsəvvür edin. Sistem Person adlı ümumi bir sinfə sahibdir və bu sinifdən iki sinif miras alır: Student və Teacher. 

// 1.Person sinfini yaradın:
// Xüsusiyyətlər: name, age
// Metod: introduce(), şəxsin adını və yaşını ekrana çıxarır.
// 2.Student sinfini yaradın və Person sinifindən miras alın:
// Əlavə xüsusiyyət: grade ()
// introduce() metodunu yenidən müəyyən edin, burada şagirdin sinfi də təqdimat mətninə əlavə olunur.
// Person sinfinin introduce() metodunu çağırmaq üçün super keyword istifadə edin və şagirdin sinfi haqqında məlumat əlavə edin.

// 3.Teacher sinfini yaradın və Person sinfindən miras alın:
// Əlavə xüsusiyyət: subject (fənn)
// introduce() metodunu yenidən müəyyən edin, burada müəllimin tədris etdiyi fənn haqqında məlumat əlavə olunur.
// super.introduce() istifadə edərək əsas metodu çağırın və fənn haqqında məlumatı əlavə edin.
// 4.Sinifləri nümunələşdirin və metodları çağırın:
// 18 yaşında olan, 10-cu sinifdə oxuyan "Ali" adlı şagirdi və "Riyaziyyat" fənnini tədris edən, 32 yaşlı "Leyla müəllimə" adlı müəllimi yaradın.
// Hər iki nümunədə introduce() metodunu çağırın və nəticəyə baxın.
// Çıxış:
// Mənim adım Ali, 16 yaşım var.
// Mən 10-cu sinifdə oxuyuram.
// Çıxış:
// Mənim adım Leyla müəllimə, 32 yaşım var.
// Mən Riyaziyyat fənnini tədris edirəm.
// class Person {
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;

        
//     }
//     introduce(){
//         console.log(`Menim  adim ${this.name} ,${this.age} yasim var `)
//     }
// }

// class Student extends Person {
//     constructor(name,age,grade){
//        super(name,age)  ;
//        this.grade=grade;
//     }
//     introduce(){
        
//         console.log(`Men ${this.grade}-cu sinifde oxuyuram `)
//     }
   
// }

// class Teacher extends Person{
//     constructor(name,age,subject){
//         super(name,age) ;
//         this.subject=subject;

//     }
//     introduce(){
//         super.introduce();
//         console.log(`Men ${this.subject} fennini tedris edirem`)
//     }
   
// }
// const aliinfo=new Person("Ali",16);
// aliinfo.introduce();
// const ali=new Student("Ali",16,10);
// ali.introduce();

// const leylainfo=new Teacher("Leyla muellime",32,"riyaziyyat");
// leylainfo.introduce();