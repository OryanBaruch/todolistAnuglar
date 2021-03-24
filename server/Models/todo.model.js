const {Schema, model}=require('mongoose');

const todoSchema = new Schema({
    content:String,
    complete:{type:Boolean, default:false},
    date:{type:Date, default:Date.now()}
},{
    versionKey:false
})

const todo_model=model('todo', todoSchema)

const initTodos=async()=>{
    const todo=new todo_model({
        content:'Clean the room',
        complete:true
    })
    await todo.save()

    const todo1=new todo_model({
        content:'Go workout',
    })
    await todo1.save()

    const todo2=new todo_model({
        content:'Pack the suitcase.',
    })
    await todo2.save()
}

module.exports={todo_model, initTodos}