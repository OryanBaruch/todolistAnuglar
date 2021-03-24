const express=require('express')
const cors=require('cors')
const port=4500
const connect_mongoDb=require('./DBConfig/dbconfig')
const {initTodos}=require('./Models/todo.model')

// initTodos()
connect_mongoDb()
const app=express()
app.use(express.json())
app.use(cors())

app.use('/todos', require('./Routes/todo.routes'))

app.listen(`${port}`, ()=>console.log(`Go on ${port}, Enjoy.`))