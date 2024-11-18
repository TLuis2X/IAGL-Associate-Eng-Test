
let todoList = {
  todos: [
    {
      "id": 1,
      "task": "This is a todo example"
    },
    {
      "id": 2,
      "task": "Wash the dishes"
    }
  ]
};

// Initialize next ID based on the existing todos
let nextId = todoList.todos.length > 0 ?
  Math.max(...todoList.todos.map(todo => todo.id)) + 1 : 1;

module.exports = {

  getTodos: () => Promise.resolve(todoList),

  addTodo: (task) => {
    const newTodo = { id: nextId++, task };
    todoList.todos.push(newTodo);
    return Promise.resolve(newTodo);
  },

  deleteTodo: (id) => {
    const todoIndex = todoList.todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex !== -1) {
      const deletedTodo = todoList.todos[todoIndex];
      todoList.todos.splice(todoIndex, 1);
      return Promise.resolve(deletedTodo);
    }
    else {
      return Promise.resolve(false);
    }
  }
};