let students = [
  {
    id: 1,
    name: "Anar",
    surname: "Zülfüqarov",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "anar21", password: "anar123" },
    gender: "male",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Arzu",
    surname: "Məmmədova",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "arzu1", password: "salam123" },
    gender: "fermale",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Aytac",
    surname: "İsayeva",
    age: 23,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "aytac123", password: "salamBaku" },
    gender: "fermale",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Cavid",
    surname: "Həsənov",
    age: 22,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "hesenov", password: "hello123" },
    gender: "male",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Elnur",
    surname: "Ələkbərov",
    age: 19,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "elnur123", password: "salam123" },
    gender: "male",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Əkbər",
    surname: "Zeynallı",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "zeynalli", password: "salamBaku" },
    gender: "male",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Fatimə",
    surname: "Əliyeva",
    age: 23,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "fatime0",
      password: "fatime01",
    },
    gender: "fermale",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Gülər",
    surname: "Bayramova",
    age: 22,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "guler123", password: "salamBaku" },
    gender: "fermale",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "İdris",
    surname: "Cəfərli",
    age: 20,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "ceferliidriss", password: "maxverstappen" },
    gender: "male",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Məhəmməd",
    surname: "Qurbanov",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "mehemmed123", password: "mehemmedqurban" },
    gender: "male",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Nərgiz",
    surname: "Abdullayeva",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "nergiz123", password: "salamBaku" },
    gender: "fermale",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 120,
  },
  {
    id: 12,
    name: "Nihat",
    surname: "Rəşidli",
    age: 19,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "nihat17", password: "nihat12345" },
    gender: "male",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 13,
    name: "Ruhid",
    surname: "Novruzov",
    age: 18,
    hobbies: ["book", "gaming", "sking"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "ruhid22", password: "ruhidnovruz" },
    gender: "male",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 250,
  },
  {
    id: 14,
    name: "Səda",
    surname: "Novruz",
    age: 18,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
    ],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "sedanovruz", password: "seda002" },
    gender: "fermale",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 15,
    name: "Sərvan",
    surname: "Səlimov",
    age: 23,
    hobbies: ["book", "walking"],
    student: true,
    teacher: [{ id: 1, name: "seid" }],
    loginDetail: { username: "sərvan99", password: "sərvan001" },
    gender: "male",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 410,
  },
  {
    id: 16,
    name: "Vüsal",
    surname: "Vəliyev",
    age: 21,
    hobbies: ["book", "gaming", "sking", "hiking", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 3, name: "jale" },
    ],
    loginDetail: { username: "vusu21", password: "vuskavali" },
    gender: "male",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 68,
    salaryAZN: 200,
  },
  {
    id: 17,
    name: "Zaur",
    surname: "Şıxıyev",
    age: 24,
    hobbies: ["book", "sking", "wrestling", "swiming"],
    student: true,
    teacher: [
      { id: 1, name: "seid" },
      { id: 2, name: "hajar" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "zz77", password: "zaur77777" },
    gender: "male",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 560,
  },
];




// - Bütün elementləri konsola yazın

function printAllelements(students) {
  students.forEach(student => console.log(student));
}


// - Bütün tələbələrin adlarını konsola yazın - name: Seid
function printname(students) {
  students.forEach(students => console.log(students.name));
}

// - Bütün tələbələrin adlarını və soyadlarını konsola yazın - name: Seid, surname: Nuraliyev

function printNamesurname(students) {
  students.forEach(students => console.log(`Name:${students.name} Surname:${students.surname}`));
}

// - Kəsri olan tələbələrin ad və soyadını çapa verin
function failedStudents(students) {
  students.filter(students => students.fail = true).forEach(students => {
    console.log(`${students.name} ${students.surname}`)
  })
}


// - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin
function maxHobbies(students) {
  let maxHobbies = students[0];
  students.forEach(student => {
    if (student.hobbies.length > maxHobbies.hobbies.length) {
      maxHobbies = student;
    }
  })
  console.log(`${maxHobbies.name} :${maxHobbies.hobbies.join(', ')}`);

}
// - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin

function average(students) {
  let maxaverage = students[0];
  students.forEach(student => {
    if (student.avgPoint > maxaverage.avgPoint) {
      maxaverage = student;
    }
  })

  console.log(`Ortalamasi en boyuk olan telebeninin ${maxaverage.name} ${maxaverage.surname}`);
}

function longPassword(students) {
  let longPassword = students[0];

  students.forEach(student => {
    if (student.loginDetail.password.length > longPassword.loginDetail.password.length) {
      longPassword = student;
    }
  });

  console.log(`En uzun parolu olan tələbənin username: ${longPassword.loginDetail.username}, adı: ${longPassword.name}`);
}
// - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin
function boyfriend(students) {
  students.forEach(student => {
    if (student.boyfriendGirlfriend === true) {
      console.log(`Name: ${student.name}, Username: ${student.loginDetail.username}`);
    }
  });
}

// - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin
function ageTeacher(students) {
  students.forEach(student => {
    if (student.age === 20) {
      const teacherNames = student.teacher.map(teacher => teacher.name).join(', ');
      console.log(`${student.name} muellimler ${teacherNames}`);
    }
  });
}

// - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin

function stipwithdollar(students) {
  const value = 1.7;
  students.forEach(student => {
    const salarywithusd = student.salaryAZN * value;
    console.log(`${student.name}   ${salarywithusd.toFixed(2)} USD`);
  });

}


// - Müəllimlərin baş hərflərini böyük hərflə yazın
function teacherName(students) {
  students.forEach(student => {
    const teacherNames = student.teacher.map(teacher => teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)).join(', ');
    console.log(teacherNames);
  })
}


// - Şifrəsində rəqəm olmayan tələbələri tapın

function withoutnumpassword(students) {
  students.forEach(student => {
    const withoutnum = student.loginDetail.password.split('').some(char => char >= '0' && char <= '9');
    if (!withoutnum) {
      console.log(`Sifresinde reqem olmayan telebeler ${student.name} ${student.surname}`)
    }
  })
}

// - Studenlerin arasında id-si 3 olanin müəllimlərin adını capa verin

function teacherbyid(students) {
  const id = 3;
  students.forEach(student => {
    const teacher = student.teacher.find(teacher => teacher.id === id)
    if (teacher) {
      console.log(`telebe :${student.name} Muellim:${teacher.name}`)
    }
  })
}

// - Tələbələrin adlarını və müəllim saylarını çapa verin
function namecountteacher(students) {
  students.forEach(student => {
    console.log(`${student.name} Muellim sayi ${student.teacher.length}`);
  })
}
// - Tələbələrin adları, username və şifrələrindən ibarət yeni array yaradın [{name:Seid,username:seid123,password:qqq123}]

function studentinfoArray(students) {
  const studentinfoArray = students.map(student => {
    return {
      name: student.name,
      username: student.loginDetail.username,
      password: student.loginDetail.password
    }
  });
  console.log(studentinfoArray);
}
// - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin

function addword(students) {
  students.forEach(student => {
    const teacherNames = student.teacher.map(teacher => teacher.name + " muellim");
    console.log(teacherNames);
  });

}
// - Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin
function addspace(students) {

  students.forEach(student => {
    student.loginDetail.password = "   ".concat(student.loginDetail.password);
    console.log(student.loginDetail.password);
  });
}
// - Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin

function hidepassword(students) {
  students.forEach(students => {
    const password = students.loginDetail.password;
    const hidden = password.slice(0, 4) + "*".repeat(password.length - 4);
    console.log(hidden);

  })
}
// - Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin

function surnameLenght(students) {
  students.forEach(students => {
    const studentSurname = students.surname.substring(0, students.name.length);
    console.log(studentSurname);
  });
}

// - Bütün tələbələrin yaşlarının toplamı nə qədərdir.

function sumofage(students) {

  const ageSum = students.reduce((acc, student) => acc + student.age, 0);
  console.log(`Bütün tələbələrin yaşlarının toplamı:${ageSum}`);

}
// - Bütün tələbələrin cəmi bal ortalaması nə qədərdir
function averagePoint(students) {
  const sumOfPoints = students.reduce((acc, student) => acc + student.avgPoint, 0);
  const averagepoint = sumOfPoints / students.length;
  console.log(`Bütün tələbələrin cəmi bal ortalaması :${averagepoint}`);
}
// - "book" həvəsini olan tələbələrin siyahısını çap edin
function hobbiebook(students) {
  const bookLovers = students.filter(student => student.hobbies.includes("book")).map(student => student.name);
  console.log(bookLovers);
}

// - Tələbələrin yaş ortalaması nədir?

function averageofAge(students) {
  const sumofAge = students.reduce((acc, student) => acc + student.age, 0);
  const averageAge = sumofAge / students.length;

  console.log(`Tələbələrin yaş ortalaması :${averageAge.toFixed(2)}`);
}

// - Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin

function createArraygenderage(students) {
  const studentinform = students.map(student => ({
    name: student.name,
    gender: student.gender,
    age: student.age

  }
) );
console.log(studentinform);
}
// - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır


function sumoflenghtNameSurname (students) {
  const sumoflenghtname=students.reduce((acc,student)=>acc+student.name.length+student.surname.length,0);
  console.log(`Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi :${sumoflenghtname}`);
}
// Tələbələrin adlarını tərsinə çevirin.
function reverseName(students){
  students.forEach(student=>{
    student.name=student.name.split('').reverse().join('').toLowerCase();
    console.log(student.name);
  });
 
}

// - "gaming" həvəsi olan tələbələrin array-ini yaradın
function hobbiegaming(students) {
  const gamingLovers = students.filter(student => student.hobbies.includes("gaming")).map(student => student.name);
  console.log(gamingLovers);
}
// - Bütün tələbələrin hobbiləri olan array yaradın?
function allhobbbies(students){
  const allhobbie=students.reduce((acc,student)=>{return acc.concat(student.hobbies);},[]);
  const removedublicate=[...new Set(allhobbie)];
  console.log(removedublicate);
}

printAllelements(students);
// printname(students);
// printNamesurname(students);
// failedStudents(students);
// maxHobbies(students);
// average(students);
// console.log(longPassword(students));
// boyfriend(students);
// ageTeacher(students);
// stipwithdollar(students);
// teacherName(students);
// withoutnumpassword(students);
// teacherbyid(students);
// namecountteacher(students);
// studentinfoArray(students);
// addword(students);
// addspace(students);
// hidepassword(students);
// surnameLenght(students);
// sumofage(students);
// averagePoint(students);
// hobbiebook(students);
// averageofAge(students);
// createArraygenderage(students);
// sumoflenghtNameSurname(students);
// reverseName(students);
// hobbiegaming(students);
// allhobbbies(students)