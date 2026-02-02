const express = require("express");


const app = express();
app.use(express.json());


const globalLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
};

app.use(globalLogger);


const validateRegister = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            error: "Username and password are required"
        });
    }

    next();
};


const authorize = (req, res, next) => {
    const { token } = req.query;

    if (token !== "admin123") {
        return res.status(401).json({
            error: "Unauthorized access"
        });
    }

    next();
};

app.post("/register", validateRegister, (req, res) => {
    res.json({ message: "User registered successfully" });
});

app.get("/profile", authorize, (req, res) => {
    res.json({ message: "Welcome to your profile" });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log("http://localhost:3000/profile?token=admin123");
});
