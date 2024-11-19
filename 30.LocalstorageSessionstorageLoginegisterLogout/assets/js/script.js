document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) ;
    let isLogineduser = users.some((user) => user.isLogined === true);
    let loginButton = document.querySelector(".login");
 
    let registerButton = document.querySelector(".register");
  
    let logout=document.querySelector(".logout");

    function changeUsername() {
        if (isLogineduser==false) {
          loginButton.classList.add("d-none");
          registerButton.classList.add("d-none");
    
          logout.classList.remove("d-none");

        }
        else{
            loginButton.classList.remove("d-none");
            registerButton.classList.remove("d-none");
     
            logout.classList.add("d-none");
        }
      function logoutt() {
          let users = JSON.parse(localStorage.getItem("users")) ;
        if (isLogineduser) {
            isLogineduser.isLogined=false;
            localStorage.setItem("users",JSON.stringify(users));
            setTimeout(()=>{
                window.location.href="login.html";
    
            },1000);
          }   
        }
      

    }


    logout.addEventListener("click",logout)
    changeUsername();
//   console.log(isLogined);
//   console.log(logout);
  
})