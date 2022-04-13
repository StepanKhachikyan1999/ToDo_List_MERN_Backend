const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require('dotenv')

const app = express()


// middleware
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())


const PORT = process.env.PORT || 5000

// import routes

const TodoItemRoute = require('./routes/todoItems')

// միացնում ենք mongo DB - ն

mongoose.connect("mongodb+srv://stepan:1234@cluster0.2i5tv.mongodb.net/todo?retryWrites=true&w=majority")
.then(() => console.log('DB connected'))
.catch((err) => console.log('error',err))


app.use('/',TodoItemRoute)


// Ավելացնում ենք PORT և կապում սերվեր հետ

app.listen(PORT,function() {
    console.log('server connected');
})