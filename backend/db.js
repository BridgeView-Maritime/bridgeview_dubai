const mongoose =require('mongoose');
const mongoURL="mongodb+srv://root:root@cluster0.abfu4n6.mongodb.net/bridgemumbai?retryWrites=true&w=majority"
const connectToMongo=()=>{
    mongoose.connect(mongoURL , ()=>{
        console.log("connected!")
    })
}
module.exports=connectToMongo;