// PART 1: Event Handling
document.getElementById("greetBtn").addEventListener("click", () => {
  document.getElementById("greetMsg").textContent = "Hello! Thanks for clicking";
});

// PART 2: Interactive Elements
// Light/Dark mode toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  count--;
  document.getElementById("counter").textContent = count;
});

// PART 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("formMsg");

  // Name validation
  if (name.length < 3) {
    msg.textContent = "❌ Name must be at least 3 characters.";
    msg.style.color = "red";
    return;
  }

  // Email validation with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    msg.textContent = "❌ Enter a valid email address.";
    msg.style.color = "red";
    return;
  }

  // Password validation
  if (password.length < 6) {
    msg.textContent = "❌ Password must be at least 6 characters.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "✅ Form submitted successfully!";
  msg.style.color = "green";
});
