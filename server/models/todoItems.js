// import ենք անում mongoose - ը

 const mongoose = require('mongoose')

// create Schema

const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})


// export ենք անում մեր Schema - ն

module.exports = mongoose.model('Todo',TodoItemSchema)