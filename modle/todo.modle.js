const mongodb=require("mongoose");

const todoSchema=new mongodb.Schema(
    {
    title:{
        type:String,
        required:true
      
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String
        
    }

    
   
});

const TodoModel=mongodb.model("todo",todoSchema);

module.exports=TodoModel;