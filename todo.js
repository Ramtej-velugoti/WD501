// todo.js
const toDisplayableList = (list) => {
    let output = "";
    list.forEach((task, index) => {
      output += `${index + 1}. Title: ${task.title}, Due Date: ${task.dueDate}, Completed: ${task.completed}\n`;
    });
    return output;
  };
  
  const todoList = () => {
    const all = [];
  
    const add = (todoTask) => {
      all.push(todoTask);
      console.log(all);
    };
  
    const markAsComplete = (index) => {
      if (all[index]) {
        all[index].completed = true;
        console.log(all);
      } else {
        console.log("Invalid index");
      }
    };
  
    const overdue = () => {
      const today = new Date();
      return all.filter((task) => new Date(task.dueDate) < today && !task.completed);
    };
  
    const dueToday = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return all.filter((task) => new Date(task.dueDate).getTime() === today.getTime() && !task.completed);
    };
  
    const dueLater = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return all.filter((task) => new Date(task.dueDate) > today && !task.completed);
    };
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  };
  
  module.exports = { toDisplayableList, todoList };
  