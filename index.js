const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
app.use(express.json());
const cors = require('cors')
app.use(cors());




const dbConfig = require('./config/db.config');
const TodoModel = require('./modle/todo.modle');
const UserModel = require('./modle/user.modle');

// Connect to the database
dbConfig();
// Connect to the database

// Define a simple route
 

  app.post('/data', async (req, res) => {
    try {
      let {title, price, description, category, image}=req.body;
  let createTodo = new TodoModel({
    title:title,
    price:price,
    description:description,
    category:category,
    image:image
  })
  await createTodo.save();
  return res.status(200).json({message: "Data received", data: createTodo});
    } catch (error) {
      console.log(error);
  res.status(500).json({message: "Internal Server Error"});
    }
  
});

app.post('/create', async (req, res) => {
  try {
    let {name, email, password, age}=req.body;
  let createTodo = new UserModel({
    name:name,
    email:email,
    password:password,
    age:age
  })
  await createTodo.save();
  return res.status(200).json({message: "Data received", data: createTodo});
    } catch (error) {
      console.log(error);
  res.status(500).json({message: "Internal Server Error"});
    }

})
  

// read data

app.get("/alltodos", async (req,res)=>{  

  try {
     let alltodos = await TodoModel.find({});

  return res.status(200).json({success: true, message: "All todos", data: alltodos});
    
  } catch (error) {
    console.log(error);
  res.status(500).json({message: "Internal Server Error"});
  }

 

})

// delete data
app.delete("/delete/:id", async (req,res)=>{  
  
  try {
    let {id} = req.params;
  let deletedtoto = await TodoModel.findOneAndDelete({_id:id});

   return res.status(200).json({success: true, message: "Todo deleted", data: deletedtoto});
  } catch (error) {
    console.log(error);
  res.status(500).json({message: "Internal Server Error"});
  }

   

});

// Start the server

// update data

app.patch("/update/:id", async (req,res)=>{
  try {
    let {id} = req.params;
    // let {title, price, description, category, image}=req.body;
    let updatedTodo = await TodoModel.findByIdAndUpdate({_id:id}, 
      req.body,
     {new: true});
     return res.status(200).json({success: true, message: "Todo updated", data: updatedTodo});
  } catch (error) {
    console.log(error);
  res.status(500).json({message: "Internal Server Error"});
  }
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});