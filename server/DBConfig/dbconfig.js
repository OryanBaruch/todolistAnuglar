const mongoose=require('mongoose')
const project=`TodoFullStack`

const connect_mongoDb=async()=>{
    try {
        await mongoose.connect(`mongodb://localhost/${project}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log(`Connected to Mongo, Project: ${project}`)
    } catch (error) {
        console.log(`Error has accurd`, error)
    }
}

module.exports=connect_mongoDb;