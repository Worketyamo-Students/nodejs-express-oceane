import fs, { write } from "fs"
import { create } from "node:domain";
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
let id = Math.floor(Math.random() * 20); //Genere un id aleatoire
const databases = "./database.json"

function database() {
    const bd = JSON.parse(fs.readFileSync("./database.json", "utf8"));
    return bd;
    
}
function writeDatajson(bd) {
    fs.writeFileSync("./database.json", JSON.stringify(bd, null, 2));
}
function writeDatacsv(bd) {
    fs.writeFileSync("./database.csv", JSON.stringify(bd));
}


database()

const taskController= {
    getAllTasks:  (req,res) =>{
        res.status(200).json({
            message: "ok",
            bd:database(),
        })
         console.log(database())

    },
    getTaskById : (req , res) =>{
// filtrer les donnees selon l'id
    const { id , name , date , duration} = req.params
    if(!req.params.id){
        return res.status(400).json({
            message: "id manquant"
        })
    }
    const task = database().find(b => b.id === parseInt(req.params.id));
    if(!task){
        return res.status(404).json({
            message: "tâche non trouvée"
        })
    }
    res.status(200).json({
        message: "ok",
        task
    });
    },
    // createTask: (req , res) =>{
    // //ajouter un nouvel evenement
    //     const {name , date , duration} = req.body
    //     if(!name || !date || !duration){
    //             return res.status(400).json({message: "informations manquantes"})
    //     }
    //     // ecrire dans le fichier log.txt
    //     const bd = database()

    //     const newtask = {
    //         id: bd.length > 0 ? bd[bd.length - 1].id + 1 : 1,
    //         name,
    //         date,
    //         duration,
    //     }
    //     bd.push(newtask)
    //     writeDatajson(bd)
    //     writeDatacsv(bd)
    //     res.status(201).json({
    //         message: "tâche ajoutée",
    //         task: newtask
    //     })
    // },
    

    createTask: async (req , res) =>{
        //ajouter un nouvel evenement
            const {name , date , duration} = req.body
            if(!name || !date || !duration){
                    return res.status(400).json({message: "informations manquantes"})
            }
            // ecrire dans le fichier log.txt
            const bd = database()

            const newtask = {
                id: bd.length > 0 ? bd[bd.length - 1].id + 1 : 1,
                name,
                date,
                duration,
            }
            bd.push(newtask)
            writeDatajson(bd)
            writeDatacsv(bd)
            res.status(201).json({
                message: "tâche ajoutée",
                task: newtask
            })
            // creer une nouvelle tache avec util.promisify

        },
    updateTask : (req , res) =>{
        //modifier une tâche

        const {name , date, duration} = req.body
        const {id} = req.params
        if(!name || !date || !duration){
            return res.status(400).json({
                message: "informations manquantes"
            })
        }
        const bd = database()
        const task = bd.find(b => b.id === parseInt(id));
        if(!task    ){
            return res.status(404).json({
                message: "tâche non trouvée"
            })
        }
        task.name = name;
        task.date = date;
        task.duration = duration;
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "tâche modifiée",
            task
        })
    },
    deleteTask : (req , res) =>{
        const {name , date , duration} = req.body
        const {id} = req.params
        if(!name || !date || !duration){
            return res.status(400).json({
                message: "informations manquantes"
            })
        }
        const bd = database()
        const task = bd.find(b => b.id === parseInt(id));
        if(!task){
            return res.status(404).json({
                message: "tâche non trouvée"
            })
        }
        const index = bd.indexOf(task);
        bd.splice(index, 1);
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "tâche supprimée",
            task
        })
    },
    


}
export default taskController