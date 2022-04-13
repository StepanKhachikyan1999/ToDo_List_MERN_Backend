const router = require('express').Router(); 

// import todo model

const todoItemsModel = require('../models/todoItems')



// first route

router.post('/api/item',async function(req,res) {
    try {
        const newItem = new todoItemsModel({
            item:req.body.item
        })
        // save ենք անում DB - ում
        const saveItem = await newItem.save()
        return res.status(200).json('item saved')
    }
    catch(err) {
        res.json(err)
    }
})

// get data in database

router.get('/api/items',async function(req,res) {
    try {
        const allTodoItems = await todoItemsModel.find({})
        return res.status(200).json(allTodoItems)
    }
    catch(err) {
        return res.json('error',err)
    }
})

// update data 

router.put('/api/item/:id',async function(req,res) {
    try {
        // find the item by its id and update it

        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json('Item Updated')

    }
    catch(err) {
        res.json(err,'error')
    }
})

// lets from Delete item in database

router.delete('/api/item/:id',async function(req,res) {
    try {
        // find item and delete item
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Item Deleted')

    }
    catch(err) {
     res.json(err)
    }
})



// export ենք անում router -ը

module.exports = router