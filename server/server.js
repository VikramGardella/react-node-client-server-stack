require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB (without deprecated options)
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Handle MongoDB connection errors properly
mongoose.connection.on("error", err => {
  console.error("MongoDB Connection Error:", err);
});

// Close MongoDB connection when server stops
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to server shutdown.");
  process.exit(0);
});

// User Schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

// Register Route
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });

  await user.save();
  res.json({ message: "User registered!" });
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Protected Route (Example)
app.get("/dashboard", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    res.json({ message: "Welcome to the dashboard!", userId: decoded.id });
  });
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
