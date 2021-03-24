const router=require('express').Router()
const {todo_model}=require('../Models/todo.model')

router.get('/', async (req, res)=>{
    try {
        const todos=await todo_model.find({})
        res.json(todos)
    } catch (error) {
        console.log('The error is', error)
    }
})

router.post('/add', async (req, res)=>{
    try {
        const {content}=req.body
        const added_todo=new todo_model({
            content
        })
        await added_todo.save()
        const todos=await todo_model.find({})
        res.json(todos)
    } catch (error) {
        console.log('The error is', error)
    }
})

router.delete('/remove-todo/:_id', async (req, res)=>{
    try {
        const {_id}=req.params
        await todo_model.deleteOne({_id})
        const todos=await todo_model.find({})
        res.json(todos)
    } catch (error) {
        console.log('The error is', error)
    }
})

router.put('/mark-todo/:_id', async (req, res)=>{
    try {
        const {complete}=req.body
        const {_id }=req.params
        await todo_model.findOneAndUpdate({_id},{complete})
        const todos=await todo_model.find({})
        res.json(todos)
    } catch (error) {
        console.log('The error is', error)
    }
})

module.exports=router