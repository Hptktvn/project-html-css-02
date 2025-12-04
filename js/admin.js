if (localStorage.getItem("logged_in") !== "true") {
  window.location.href = "login.html";
}
let btnLogout = document.getElementById("btnLogout");
btnLogout.addEventListener("click", function () {
  localStorage.removeItem("logged_in");
  window.location.href = "./login.html";
});
