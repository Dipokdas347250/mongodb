const mongodb=require("mongoose");

const todoSchema=new mongodb.Schema({
    demo:{
        type:String,
        required:true
      
    }
   
});

const TodoModel=mongodb.model("todo",todoSchema);

module.exports=TodoModel;