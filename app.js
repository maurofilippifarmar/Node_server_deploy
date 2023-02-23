import express from 'express';
import dotenv from 'dotenv';
import indexRoutes from './routes/index.js';
import userRoutes from './routes/users.js';
const app = express();

// is storing all the .env variables in this object
dotenv.config()

const PORT = process.env.PORT || 8080;

app.use(express.json());

//index
app.use('/', indexRoutes);

//users
app.use('/users', userRoutes);

// 404 Error route
 app.use((req, res) => {
     res.status(404).sendFile('./views/404PageNotFound.html', { root: '.' });
});

app.listen(PORT, () => {
    console.log('The server is running on port:', PORT);
});
