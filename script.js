
const backend = "https://harsh-backend-5.onrender.com";

async function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const res = await fetch(backend + "/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  alert("Signup: " + JSON.stringify(data));
}

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const res = await fetch(backend + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  if(data.token) {
    document.querySelector(".auth-container").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  } else {
    alert("Login failed");
  }
}
