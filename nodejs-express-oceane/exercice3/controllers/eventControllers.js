import fs, { write } from "fs"
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
    const { id , nom , age} = req.params
    if(!req.params.id){
        return res.status(400).json({
            message: "id manquant"
        })
    }
    const book = database().find(b => b.id === parseInt(req.params.id));
    if(!book){
        return res.status(404).json({
            message: "livre non trouvé"
        })
    }
    res.status(200).json({
        message: "ok",
        book
    });
    },
    createEvents: (req , res) =>{
    //ajouter un nouvel evenement
        const {nom , numero} = req.body
        if(!nom || !numero){
                return res.status(400).json({
                    message: "informations manquantes"
            })
        }   
        const bd = database()
        const newEvent = {
            id: bd.length > 0 ? bd[bd.length - 1].id + 1 : 1,
            nom,
            numero
        }
        bd.push(newEvent)
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(201).json({
            message: "evenement ajouté",
            event: newEvent
        })
        //ajouter un nouvel evenement avec la methode map
        // const newEvent = {
        //     id: bd.length > 0 ? bd[bd.length - 1].id + 1 : 1,
        //     nom,
        //     numero
        // }
    },
    updateEvent : (req , res) =>{
        //modifier un evenement

        const {nom , age } = req.body
        const {id} = req.params
        if(!nom || !age){
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
        event.nom = nom;
        event.age = age;
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "evenement modifié",
            event
        })
    },
    deleteEvent : (req , res) =>{
                const {nom , age } = req.body
        const {id} = req.params
        if(!nom || !age){
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