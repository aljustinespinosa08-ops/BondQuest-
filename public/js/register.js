const SUPABASE_URL = "https://ekfyoxrlyytvyyogkgfw.supabase.co";
const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY_HERE";

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const studentid = document.getElementById("studentid").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.getElementById("role").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": SUPABASE_KEY
        },
        body: JSON.stringify({
            email: email,
            password: password,
            data: {
                fullname: fullname,
                studentid: studentid,
                role: role
            }
        })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Registration successful!");
        window.location.href = "/";
    } else {
        alert(data.message || "Registration failed.");
    }
});