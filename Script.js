const burger = document.getElementById("burger");
const nav = document.getElementById("navLinks");

burger.onclick = () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
};


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(regex)) {
    alert("Invalid email");
    return;
  }

  if (pass.length < 6) {
    alert("Password must be 6 characters");
    return;
  }

  alert("Form submitted!");
});

document.getElementById("togglePass").onclick = function () {
  let pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
};

fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
  .then(res => res.json())
  .then(data => console.log(data));

const cookieBox = document.getElementById("cookie");
if (localStorage.getItem("cookiesAccepted")) {
  cookie.style.display = none;
}

document.getElementById("acceptCookies").onclick = () => {
  localStorage.setItem("cookiesAccepted", true);
  cookie.style.display = none;
};

