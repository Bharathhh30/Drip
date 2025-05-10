import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import blinkRoutes from './routes/blink.js';

dotenv.config();
const app = express();

const corsOptions = {
    origin: "*", // Allow only frontend running on port 5174 (now allow from everywhere)
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Allow cookies or authentication headers
  };
app.use(cors(corsOptions))
app.use(express.json());

app.use('/api/blink', blinkRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Blink API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
