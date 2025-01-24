import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv'
import { setupCommonMiddleware } from './middleware/commonMiddleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

setupCommonMiddleware(app)

// Database connection
mongoose
	.connect('mongodb://localhost:27017/GeographicalProviderData', { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

// Routes
import apiRoutes from './routes/apiRoutes';
app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
