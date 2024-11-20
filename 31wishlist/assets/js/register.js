
document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let form = document.querySelector("form");
  
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let password = document.querySelector("#password");
    let email = document.querySelector("#email");
    let username = document.querySelector("#username");
  
    let confirmPassword=document.querySelector("#confirmpassword");
  
  
    // 1) Username - Minimum 3, maksimum 20 simvol; yalnız əlifba, rəqəm, alt xətt və tire istifadə oluna bilər.  
    function validationUsername(username) {
      const usernamePattern = /^[a-zA-Z0-9_-]{3,20}$/;
      return usernamePattern.test(username);
  
    }
    //2) Email - Düzgün e-poçt formatında olmalıdır (məsələn, user@example.com).
  
    ///DDDR@F yazanda meslen geldi
    function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      return emailPattern.test(email);
    }
  
    // 3) Sifre Minimum 8 simvol; ən azı bir böyük hərf, bir kiçik hərf, bir rəqəm və bir xüsusi simvol (məsələn, @, #, $, %, &). "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
  
  
  
    
    function validationPaswwords(password) {
    
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
        return passwordPattern.test(password);
      
      
    }
    
    function register(e) {
      e.preventDefault();
      if (!validationUsername(username.value)) {
        toastred("Username must be between 3 to 20 characters and contain only letters, numbers, or underscores.");
        return;
      }
  
      if (!validateEmail(email.value)) {
        toastred("Please enter a valid email address");
        return;
      }
      if (!validationPaswwords(password.value)) {
        toastred("Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special characters.");
        return;
      }
  
      if (password.value !== confirmPassword.value) {
        toastred("Şifrə və şifrə təsdiqi bir birine uyğun gəlmir.");
        return;
      }
      let uniqueUser = users.some((user) => user.username === username.value || user.email === email.value);
     
      if (!uniqueUser) {
        let newUser = {
          name: name.value,
          surname: surname.value,
          username: username.value,
          password: password.value,
          email:email.value,
          isLogined: true,
          confirmPassword:confirmPassword.value,
          id: uuidv4(),
          wishList:[],
  
  
        };

        console.log(newUser);
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        toast("Registration successful!");
        form.reset();
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1000);
  
  
  
      }
      // 5) Qeydiyyat zamanı daxil edilən istifadəçi adı və e-poçt sistemdə mövcud olmamalıdır. Eyni istifadəçi adı və ya e-poçt ilə qeydiyyat mümkün olmamalıdır.  
      else {
        toastred("Artıq qeydiyyatdan keçmişsiniz");
      }
    }
  
  
  
  

    function toast(text) {
      Toastify({
        text: `${text}`,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { }
      }).showToast();
    }
    function toastred(text) {
      Toastify({
        text: `${text}`,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: " rgb(36,18,0)",
          background: "linear-gradient(90deg, rgba(36,18,0,1) 0%, rgba(121,18,9,1) 35%, rgba(255,101,0,1) 100%)",
        },
        onClick: function () { }
      }).showToast();
    }
    form.addEventListener("submit", register);
  });