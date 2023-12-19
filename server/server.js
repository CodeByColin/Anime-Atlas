import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const { Pool } = pg;
const dbString = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const pool = new Pool({
  connectionString: dbString,
});

// Route for user registration
app.post("/api/users/register", async (req, res) => {
  const { username, password } = req.body;

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Insert the user into the "users" table and return the new user
    const result = await pool.query(
      'INSERT INTO "users" (username, password) VALUES ($1, $2) RETURNING *',
      [username, hashedPassword]
    );

    const newUser = result.rows[0];
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route for user login
app.post("/api/users/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Retrieve user information based on the provided username
    const result = await pool.query(
      'SELECT * FROM "users" WHERE username = $1',
      [username]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      // Check if the provided password matches the stored hashed password
      if (isPasswordMatch) {
        res
          .status(200)
          .json({ user, success: true, message: "Login successful" });
      } else {
        res.status(401).json({ success: false, message: "Incorrect password" });
      }
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.get("/api/favorites/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM favorites WHERE user_id = $1",
      [userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to add a new favorite anime
app.post("/api/favorites", async (req, res) => {
  const { userId, animeId } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO favorites (user_id, anime_id) VALUES ($1, $2) RETURNING *",
      [userId, animeId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to delete a favorite anime
app.delete("/api/favorites/:userId/:animeId", async (req, res) => {
  const { userId, animeId } = req.params;

  try {
    await pool.query(
      "DELETE FROM favorites WHERE user_id = $1 AND anime_id = $2",
      [userId, animeId]
    );
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
