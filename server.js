require("dotenv").config();

const express = require("express");
const app = express();

const authRoutes = require("./routes/auth");

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("🧪 BondQuest API is Running!");
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`BondQuest Server running on port ${PORT}`);
});