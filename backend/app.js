// app.js

const express = require('express');
const colors = require('colors');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware')
require("dotenv").config();
const connectDB = require('./config/db')

const app = express();

// Connect Database
connectDB();

// middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//routes
app.use('/api/users', require('./routes/api/users'));


app.use(errorHandler);
//port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () => 
  console.log(`Server is running on port ${port}`)
);