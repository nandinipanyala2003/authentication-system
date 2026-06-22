const token =
localStorage.getItem("token");

if (!token) {
  window.location.href =
    "/login";
}

const username =
localStorage.getItem("name");

document.getElementById(
  "username"
).textContent = username;

document
.getElementById("logoutBtn")
.addEventListener("click", () => {

  localStorage.removeItem(
    "token"
  );

  localStorage.removeItem(
    "name"
  );

  window.location.href =
    "/login";
});