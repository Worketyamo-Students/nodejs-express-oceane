const fs = require('fs');
const path = require('path');
let id = Math.floor(Math.random() * 20); //Genere un id aleatoire
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const taskController = {
    getAllTasks: async (req, res) => {
        try {
            const data = await fs.promises.readFile(path.join(__dirname, '../database.json'), 'utf-8');
            const tasks = JSON.parse(data);
            res.status(200).json({
                message: "ok",
                tasks: tasks
            });
        } catch (error) {
            console.error("Error reading tasks:", error);
            res.status(500).json({
                message: "Internal server error"
            });
        }
    },
    getTaskById: async (req, res) => {
        const { id  , name, date, description } = req.params;
        try {
            const data = await fs.promises.readFile(path.join(__dirname, '../database.json'), 'utf-8');
            const tasks = JSON.parse(data);
            const task = tasks.find(t => t.id === parseInt(id));
            if (!task) {
                return res.status(404).json({
                    message: "Task not found"
                });
            }
            res.status(200).json({
                message: "ok",
                task: task
            });
        } catch (error) {
            console.error("Error reading task:", error);
            res.status(500).json({
                message: "Internal server error"
            });
        }
    },
    createTask: async (req, res) => {
        const { name, date, description } = req.body;
        if (!name || !date || !description) {
            return res.status(400).json({
                message: "informations manquantes"
            });
        }
        try {
            const data = await fs.promises.readFile(path.join(__dirname, '../database.json'), 'utf-8');
            const tasks = JSON.parse(data);
            const newTask = {
                id: id,
                name,
                date,
                description
            };
            tasks.push(newTask);
            await writeFileAsync(path.join(__dirname, '../database.json'), JSON.stringify(tasks, null, 2));
            res.status(201).json({
                message: "Task created successfully",
                task: newTask
            });
        } catch (error) {
            console.error("Error creating task:", error);
            res.status(500).json({
                message: "Internal server error"
            });
        }
    },
    updateTask: (req, res) => {
        const { id } = req.params;
        const { name, date, description } = req.body;
        if (!name || !date || !description) {
            return res.status(400).json({
                message: "informations manquantes"
            });
        }
        fs.readFile(path.join(__dirname, '../database.json'), 'utf-8', (err, data) => {
            if (err) {
                console.error("Error reading tasks:", err);
                return res.status(500).json({
                    message: "Internal server error"
                });
            }
            const tasks = JSON.parse(data);
            const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
            if (taskIndex === -1) {
                return res.status(404).json({
                    message: "Task not found"
                });
            }
            tasks[taskIndex] = { id: parseInt(id), name, date, description };
            fs.writeFile(path.join(__dirname, '../database.json'), JSON.stringify(tasks, null, 2), (err) => {
                if (err) {
                    console.error("Error updating task:", err);
                    return res.status(500).json({
                        message: "Internal server error"
                    });
                }
                res.status(200).json({
                    message: "Task updated successfully",
                    task: tasks[taskIndex]
                });
            });
        });
    },
    deleteTask:(req, res) => {

    }
}
module.exports = taskController;
