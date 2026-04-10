import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT;
const app = express();

// Middelwares

app.use(cors());
app.use(express.json())


// Routes


// app.use();

app.listen(PORT, () => {
    console.log(`🔋 🔥 Servidor corriendo en puerto http://localhost:${PORT}`);
})
