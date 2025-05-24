const route = require('express').Router();
const taskController = require('../controllers/taskController.js');

route.post ('/tasks',taskController.createTask);
route.get ('/tasks',taskController.getAllTasks);
route.get ('/tasks/:id',taskController.getTaskById);
route.put ('/tasks/:id', taskController.updateTask);
route.delete ('/tasks/:id', taskController.deleteTask);

module.exports = route;
