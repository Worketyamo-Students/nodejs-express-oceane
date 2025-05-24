import fs, { write } from "fs"
import { pipeline } from 'node:stream';
let id = Math.floor(Math.random() * 20); //Genere un id aleatoire
const databases = "./database.json"
const writeFlux = fs.createWriteStream('./log.txt', {flags: 'a'});

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

const eventcontroller= {
    getAllEvents :(req,res) =>{
        res.status(200).json({
            message: "ok",
            bd:database(),
        })
         console.log(database())

    },
    getAllEventsById : (req , res) =>{
// filtrer les donnees selon l'id
    const { id , name , date} = req.params
    if(!req.params.id){
        return res.status(400).json({
            message: "id manquant"
        })
    }
    const event = database().find(b => b.id === parseInt(req.params.id));
    if(!event){
        return res.status(404).json({
            message: "evenement non trouvé"
        })
    }
    res.status(200).json({
        message: "ok",
        event
    });
    },
    createEvents: (req , res) =>{
    //ajouter un nouvel evenement
        const {name , date} = req.body
        if(!name || !date){
                return res.status(400).json({message: "informations manquantes"})
        }
        writeFlux.write(`event added: ${name}, ${date} at ${Date()}\n`, (err) => {
            if(err) console.error(err);
        });
        // ecrire dans le fichier log.txt
        const bd = database()

        const newEvent = {
            id: id,
            name,
            date
        }
        bd.push(newEvent)
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(201).json({
            message: "evenement ajouté",
            event: newEvent
        })
    },
    updateEvent : (req , res) =>{
        //modifier un evenement

        const {name , date} = req.body
        const {id} = req.params
        if(!name || !date){
            return res.status(400).json({
                message: "informations manquantes"
            })
        }
        const bd = database()
        const event = bd.find(b => b.id === parseInt(id));
        if(!event){
            return res.status(404).json({
                message: "evenement non trouvé"
            })
        }
        event.name = name;
        event.date = date;
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "evenement modifié",
            event
        })
    },
    deleteEvent : (req , res) =>{
        const {name , date} = req.body
        const {id} = req.params
        if(!name || !date){
            return res.status(400).json({
                message: "informations manquantes"
            })
        }
        const bd = database()
        const event = bd.find(b => b.id === parseInt(id));
        if(!event){
            return res.status(404).json({
                message: "evenement non trouvé"
            })
        }
        const index = bd.indexOf(event);
        bd.splice(index, 1);
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "evenement supprimé",
            event
        })
    },


    
}
export default eventcontroller