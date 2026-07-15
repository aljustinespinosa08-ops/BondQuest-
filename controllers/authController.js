const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register User
exports.register = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO users (fullname, email, password, role)
            VALUES (?, ?, ?, ?)
        `;

        db.query(sql, [fullname, email, hashedPassword, role], (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Registration successful!"
            });
        });

    } catch (error) {
        res.status(500).json(error);
    }
};

// Login User
exports.login = (req, res) => {

    res.json({
        success: true,
        message: "Login feature coming next."
    });

};
