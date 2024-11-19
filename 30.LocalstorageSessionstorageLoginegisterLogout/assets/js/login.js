document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users"));
  let form = document.querySelector("form");
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");

  let loginAttempts = JSON.parse(localStorage.getItem("loginAttempts")) || {};
  const maxAttempts = 3;
  const timeBlock = 15 * 60 * 1000;

  function validationUsername(username) {
      const usernamePattern = /^[a-zA-Z0-9_-]{3,20}$/;
      if (!usernamePattern.test(username)) {
          toastred("Username must be between 3 to 20 characters and contain only letters, numbers, or underscores.");
      }
      return usernamePattern.test(username);
  }

  function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
          toastred("Please enter a valid email address.");
      }
      return emailPattern.test(email);
  }

  function validationPasswords(password) {
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordPattern.test(password)) {
          toastred("Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special characters.");
      }
      return passwordPattern.test(password);
  }

  function isBlocked(username) {
      if (!loginAttempts[username]) return false;

      let attemptData = loginAttempts[username];
      if (attemptData.blockedUntil && new Date() < new Date(attemptData.blockedUntil)) {
          return true;
      }

      if (attemptData.blockedUntil && new Date() >= new Date(attemptData.blockedUntil)) {
          delete loginAttempts[username];
          localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));
      }

      return false;
  }

  function login(e) {
      e.preventDefault();

      if (!validationUsername(username.value) || !validationPasswords(password.value)) {
          return;
      }

      if (isBlocked(username.value)) {
          toastred(`Account is temporarily locked. Try again later.`);
          return;
      }

      if (!users) {
          toastred("No users found.");
          return;
      }

      let findUser = users.find((user) => user.username === username.value && user.password === password.value);

      if (findUser) {
          findUser.islogined = true;
          localStorage.setItem("users", JSON.stringify(users));
          toast("User logged in successfully.");
          delete loginAttempts[username.value];
          localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));

          setTimeout(() => {
              window.location.href = "index.html";
          }, 2000);
      } else {
          if (!loginAttempts[username.value]) {
              loginAttempts[username.value] = { attempts: 0 };
          }

          loginAttempts[username.value].attempts++;

          if (loginAttempts[username.value].attempts >= maxAttempts) {
              loginAttempts[username.value].blockedUntil = new Date(Date.now() + timeBlock).toISOString();
              toastred(`Too many login attempts. Account is locked for 15 minutes.`);
          } else {
              toastred(`Incorrect username or password. Attempts left: ${maxAttempts - loginAttempts[username.value].attempts}`);
          }

          localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));
      }
  }

  form.addEventListener("submit", login);

  function toast(text) {
      Toastify({
          text: text,
          duration: 2000,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function() {}
      }).showToast();
  }

  function toastred(text) {
      Toastify({
          text: text,
          duration: 2000,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
              background: "linear-gradient(90deg, rgba(36,18,0,1) 0%, rgba(121,18,9,1) 35%, rgba(255,101,0,1) 100%)",
          },
          onClick: function() {}
      }).showToast();
  }
});
