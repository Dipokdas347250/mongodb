const mongodb=require("mongoose");

const todoSchema=new mongodb.Schema({
    demo:{
        type:String,
      
    }
   
});

const TodoModel=mongodb.model("todo",todoSchema);

module.exports=TodoModel;