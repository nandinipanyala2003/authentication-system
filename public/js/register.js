const registerForm =
document.getElementById("registerForm");

registerForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const name =
      document.getElementById("name").value;

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    const response = await fetch(
      "/api/auth/register",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data =
      await response.json();

    alert(data.message);

    if (response.ok) {
      window.location.href =
        "/login";
    }
  }
);