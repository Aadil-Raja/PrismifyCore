import express from 'express';
import cors from 'cors';
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Routes will go here later
// e.g., app.use('/api/contact', contactRoutes);
import contactRoutes from './routes/contact.routes.js';


app.use('/api/contact', contactRoutes);


export default app;
