require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

// Routes
const authRoutes = require("./route/auth");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/auth", authRoutes);

// Pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "register.html"));
});

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

app.get("/game", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "game.html"));
});

app.get("/leaderboard", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "leaderboard.html"));
});

app.get("/pretest", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "pretest.html"));
});

app.get("/posttest", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "posttest.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "admin.html"));
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 BondQuest Server running on port ${PORT}`);
});