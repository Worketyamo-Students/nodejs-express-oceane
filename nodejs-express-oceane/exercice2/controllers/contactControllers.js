import fs from "fs"
let id = Math.floor(Math.random() * 20); //Genere un id aleatoire
function database() {
    const bd = JSON.parse(fs.readFileSync("../db.json", "utf8"));
    return bd;
}
function writeDatajson(bd) {
    fs.writeFileSync("../db.json", JSON.stringify(bd, null, 2));
}
function writeDatacsv(bd) {
    fs.writeFileSync("../database.csv", JSON.stringify(bd));
}


database()

const contactController= {
    getAllContacts :(req,res) =>{
            res.status(200).json({
            message: "ok",
            bd:database(),
        })
         console.log(database())

    },
    getContactById : (req , res) =>{
    // filtrer les donnees selon l'id
        const { id , nom , numero} = req.params
    if(!req.params.id){
        return res.status(400).json({
            message: "id manquant"
        })
    }
    const contact = database().find(b => b.id === parseInt(req.params.id));
    if(!contact){
        return res.status(404).json({
            message: "livre non trouvé"
        })
    }
    res.status(200).json({
        message: "ok",
        contact
    });

    },
    createContact : (req , res) =>{
        const {nom , numero} = req.body
        if(!nom || !numero){
                return res.status(400).json({
                    message: "informations manquantes"
            })
        }   
        const bd = database()
        const newContact = {
            id: bd.length > 0 ? bd[bd.length - 1].id + 1 : 1,
            nom,
            numero
        }
        bd.push(newContact)
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(201).json({
            message: "livre ajouté",
            contact: newContact
        })

    },
    updateContact : (req , res) =>{
        //modifier un livre
        const {nom , numero } = req.body
        const {id} = req.params
        if(!nom || !numero){
            return res.status(400).json({
                message: "informations manquantes"
            })
        }
        const bd = database()
        const contact = bd.find(b => b.id === parseInt(id));
        if(!contact){
            return res.status(404).json({
                message: "livre non trouvé"
            })
        }
        contact.nom = nom;
        contact.numero = numero;
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "livre modifié",
            contact
        })

    },
    deleteContact : (req , res) =>{
        const {nom , numero } = req.body
        const {id} = req.params
        if(!nom || !numero){
            return res.status(400).json({
                message: "informations manquantes"
            })
        }
        const bd = database()
        const contact = bd.find(b => b.id === parseInt(id));
        if(!contact){
            return res.status(404).json({
                message: "contact non trouvé"
            })
        }
        const index = bd.indexOf(contact);
        bd.splice(index, 1);
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "contact supprimé",
            contact
        })

    },
    getStatus : (req , res) => {

    },

}
export default contactController 