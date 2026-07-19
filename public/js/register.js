const SUPABASE_URL = "https://ekfyoxrlyytvyyogkgfw.supabase.co";

const SUPABASE_KEY = "sb_publishable_GYGw3MOtvNUyzIWCPQokAQ_I7sOncg2";


const registerForm = document.getElementById("registerForm");


registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();


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


    try {

        const response = await fetch(
            `${SUPABASE_URL}/auth/v1/signup`,
            {
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
            }
        );


        const result = await response.json();


        if (response.ok) {

            alert("Account created successfully!");

            window.location.href = "/";

        } else {

            alert(result.message || "Registration failed.");

        }


    } catch (error) {

        console.log(error);

        alert("Connection error.");

    }

});