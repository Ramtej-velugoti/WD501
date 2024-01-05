// _tests_/createTodo.test.js
const { todoList } = require('../todo');

test('creates a new todo', () => {
  const todos = todoList();
  todos.add({ title: 'Sample Todo', dueDate: '2024-01-10', completed: false });
  expect(todos.all.length).toBe(1);
});
