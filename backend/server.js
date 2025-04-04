const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to handle login form POST
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login Attempt:", { email, password });

  // Dummy check (just for demo)
  if (email === "test@example.com" && password === "password") {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
