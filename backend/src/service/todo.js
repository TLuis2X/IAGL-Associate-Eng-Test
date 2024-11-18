const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos();
    },
    addTodo: async (task) => {
      return await repository.addTodo(task);
    },
    deleteTodo: async (id) => {
      return await repository.deleteTodo(id);
    }
  };
};

module.exports = todoService;