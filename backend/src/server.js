const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  // Get all todo items
  server.get('/api/todo', async (req, res) => {
    const todos = await todoService.getTodos()
    res.json(todos);
    console.log(todos);
  });

  // Adds a new todo item
  server.post('/api/todo', async (req, res) => {
    const { task } = req.body;

    if (!task) {
      return res.status(400).json({ error: 'Task is required'});
    }

    try {
      const newTodo = await todoService.addTodo(task);
      res.status(201).json(newTodo);
    }
    catch (error) {
      res.status(500).json({ error: 'Failed to add Todo item' });
    }
  });

  server.delete('/api/todo/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedTodo = await todoService.deleteTodo(id);
      if (deletedTodo) {
        res.status(200).json({ message: 'Todo item deleted' });
      }
      else {
        res.status(404).json({ error: 'Todo item not found' });
      }
    }
    catch (error) {
      res.status(500).json({ error: 'Failed to delete Todo item' });
    }
  });

  /**
  POST /api/todo
  {
   "task": "Some API"
  }

   {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

  return server;
};
module.exports = server;