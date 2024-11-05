// 1.Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi sayta daxil olanda daxil olduğu saata uyğun ona mesaj çıxarsın


function hours(date) {
    const currentHour = date.getHours();
    if (currentHour >= 6 && currentHour < 12) {
        return "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        return "Good afternoon";
    } else if (currentHour >= 18 && currentHour < 22) {
        return "Good evening";
    } else {
        return "Good night";
    }

}
const date = new Date();

console.log(hours(date));


// 2.2.Verilmis sozde sait herflewrin tapilmasi

// function findvovel(word) {
//     const wovels = 'aueio';
//     const findwovels = [];
//     const  wordletter=word.toLowerCase().split('');

//     for (let i = 0; i < wordletter.length; i++) {
//         if (wovels.includes(wordletter[i])) {
//             findwovels.push(wordletter[i]);
        
//         }
     
        
//     }
//     return findwovels;

// }

// let word = "Arzu";
// console.log(findvovel(word));

// 3.Verilmish sozun bosluga gore sayi

// function spacecount(sentence) {
//     let newsentence=sentence.trim();
//     if (newsentence === ""){
//         return 0; 
//     }
//      const word=newsentence.split(/\s+/);
//      return word.length;

// }


// const sentence="     salam af106            ";
// console.log(spacecount(sentence));


// 4.4.Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın


// function wordmaxlength(arr) {
 
//     let arrmaxlength = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i].length>arrmaxlength.length){
//             arrmaxlength = arr[i];
          
//         }
        
        
//     }
//     return arrmaxlength;
    
// }

// let arr=["apple","banana","cherry","pineappleee"];
// console.log(wordmaxlength(arr));


// 5.5.Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
// let arr = ["APPLE", "banana", "Cherry", "Pineapple"];

// arr.forEach((word, index) => { 
//     if (word === word.toUpperCase()) { 
//         console.log(`Söz: ${word}, İndeks: ${index}`); 
//     }
// });




// // 6. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
// let arr=["salAm","SALAM","SALAm","salam","SaLam"];
// arr.forEach(word => {
//     count=0;
//     for (const char of word) {
//         if (char==char.toUpperCase()) {
//             count++;
//         }
//     }
//          if (count > 2) {
//         console.log(word); 
//     }
// });


// 7. Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın. "My name is Seid" - "MniS"
// let sentence="My name is Seid";
// let words=sentence.split(' ');

// function bletter(words) {
//     let result='';
//     for (let i = 0; i < words.length; i++) {
//       result+= words[i].charAt(0);
     
        
//     }
//     return result;
// }

// console.log(bletter(words));



// 8.8. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn komputer-k6r, stəkan-s4n, javascript- j8t

// function shotter(sentence) {
//     let words = sentence.split(' ');
//     let result = '';

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if (word.length < 4) {
//             result += word;
//         } else {
//             result += word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
//         }
//         result += ' ';
//     }

//     return result.trim();
// }

// let sentence = "komputer stekan javascript ders der";
// console.log(shotter(sentence)); 


// ----------------------------------------------------
// 9JavaScript-də Map obyektindən istifadə edərək sadə bir "Tapşırıq İzləmə Sistemi" yaradın. Bu sistemdə hər bir tapşırığın bir -si (unikal nömrə), (məsələn, "JavaScript öyrənmək"), (məsələn, "gözləmədə", "başlayıb", "tamamlandı") və (məsələn, "yüksək", "normal", "aşağı") olacaq.  


// Tapşırıqda aşağıdakı funksiyaları yazmalısınız:



// const taskTrackingSystem = (() => {
//     const tasks = new Map();
// // : Verilmiş ID, ad, vəziyyət və prioritetlə yeni bir tapşırıq əlavə edin. Əgər eyni ID-li bir tapşırıq artıq varsa, əlavə etmədən xəbərdarlıq verin.
//     const addTask = (id, name, status, priority) => {
//         if (tasks.has(id)) {
//             console.log(`Tapşırıq ID-si ${id} artıq var`);
//             return;
//         }
//         tasks.set(id, { name, status, priority });
//         console.log(`Tapşırıq '${name}' əlave olundu`);
//     };

//     // : Verilmiş ID ilə olan tapşırığın statusunu dəyişin. Əgər tapşırıq tapılmasa, xəbərdarlıq verin.
//     const updateStatus = (id, newStatus) => {
//         if (!tasks.has(id)) {
//             console.log(`Tapşırıq ID-si ${id} yoxdur`);
//             return;
//         }
//         const task = tasks.get(id);
//         task.status = newStatus;
//         console.log(`Tapşırıq ID-si ${id} ucun status '${newStatus}' olaraq yenilendi`);
//     };
// // : Verilmiş ID ilə olan tapşırığın prioritetini dəyişin. Əgər tapşırıq tapılmasa, xəbərdarlıq verin.
//     const updatePriority = (id, newPriority) => {
//         if (!tasks.has(id)) {
//             console.log(`Tapşırıq ID-si ${id} tapılmadı`);
//             return;
//         }
//         const task = tasks.get(id);
//         task.priority = newPriority;
//         console.log(`Tapşırıq ID-si ${id} üçün prioritet '${newPriority}' olaraq yeniləndi.`);
//     };
// // : Verilmiş ID ilə olan tapşırığı sistemdən silin.
// // : Sistemdəki bütün tapşırıqları ekranda göstərmək üçün bir funksiya yazın.
//     const deleteTask = (id) => {
//         if (!tasks.has(id)) {
//             console.log(`Tapşırıq ID-si ${id} tapılmadı`);
//             return;
//         }
//         tasks.delete(id);
//         console.log(`Tapşırıq ID-si ${id} silindi`);
//     };

//     // : Sistemdəki bütün tapşırıqları ekranda göstərmək üçün bir funksiya yazın.
//     const displayTasks = () => {
//         if (tasks.size === 0) {
//             console.log("Heç bir tapşırıq yoxdu");
//             return;
//         }
//         console.log("Bütün tapşırıqlar:");
//         tasks.forEach((task, id) => {
//             console.log(`ID: ${id}, Ad: ${task.name}, Status: ${task.status}, Prioritet: ${task.priority}`);
//         });
//     };

//     return {
//         addTask,
//         updateStatus,
//         updatePriority,
//         deleteTask,
//         displayTasks,
//     };
// })();

// taskTrackingSystem.addTask(1, "JavaScript öyrənmək", "gözləmədə", "yüksək");
// taskTrackingSystem.addTask(2, "CSS təkrarlamaq", "başlayıb", "normal");
// taskTrackingSystem.updateStatus(1, "tamamlandı");
// taskTrackingSystem.updatePriority(2, "aşağı");
// taskTrackingSystem.displayTasks();
// taskTrackingSystem.deleteTask(1);
// taskTrackingSystem.displayTasks();
