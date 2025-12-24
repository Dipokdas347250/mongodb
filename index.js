const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
app.use(express.json());

const dbConfig = require('./config/db.config');
const TodoModel = require('./modle/todo.modle');

// Connect to the database
dbConfig();
// Connect to the database

// Define a simple route
app.post('/data', async (req, res) => {
  let {demo}=req.body;
  let createTodo = new TodoModel({
    demo:demo
  })
  await createTodo.save();
  res.status(200).json({message: "Data received", data: createTodo});
});

// Start the server



app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});