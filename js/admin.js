// Kiểm tra người dùng đã đăng nhập hay chưa
// Nếu chưa đăng nhập thì chuyển hướng về login.html
if (localStorage.getItem("logged_in") !== "true") {
  window.location.href = "login.html";
}
let btnLogout = document.getElementById("btnLogout");
btnLogout.addEventListener("click", function () {
  localStorage.removeItem("logged_in");
  window.location.href = "./login.html";
});
