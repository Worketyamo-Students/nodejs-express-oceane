import { Router } from "express";
import taskController from "../controllers/taskController.js";
const route = Router();

route.post ('/tasks',taskController.createTask);
route.get ('/tasks',taskController.getAllTasks);
route.get ('/tasks/:id',taskController.getTaskById);
route.put ('/tasks/:id', taskController.updateTask);
route.delete ('/tasks/:id', taskController.deleteTask);

export default route;
