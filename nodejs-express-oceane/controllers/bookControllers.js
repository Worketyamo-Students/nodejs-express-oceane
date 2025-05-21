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

const bookcontroller= {
    getAllBooks :(req,res) =>{
        res.status(200).json({
            message: "ok",
            bd:database(),
        })
         console.log(database())

    },
    getAllBooksByID : (req , res) =>{
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
    createBooks : (req , res) =>{
    //ajouter un nouveau livre
        const {nom , age} = req.body
        if(!nom || !age){
                return res.status(400).json({
                    message: "informations manquantes"
            })
        }   
        const bd = database()
        const newBook = {
            id: bd.length > 0 ? bd[bd.length - 1].id + 1 : 1,
            nom,
            age
        }
        bd.push(newBook)
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(201).json({
            message: "livre ajouté",
            book: newBook
        })
    },
    updateBook : (req , res) =>{
        //modifier un livre

        const {nom , age } = req.body
        const {id} = req.params
        if(!nom || !age){
            return res.status(400).json({
                message: "informations manquantes"
            })
        }
        const bd = database()
        const book = bd.find(b => b.id === parseInt(id));
        if(!book){
            return res.status(404).json({
                message: "livre non trouvé"
            })
        }
        book.nom = nom;
        book.age = age;
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "livre modifié",
            book
        })
    },
    deleteBook : (req , res) =>{
                const {nom , age } = req.body
        const {id} = req.params
        if(!nom || !age){
            return res.status(400).json({
                message: "informations manquantes"
            })
        }
        const bd = database()
        const book = bd.find(b => b.id === parseInt(id));
        if(!book){
            return res.status(404).json({
                message: "livre non trouvé"
            })
        }
        const index = bd.indexOf(book);
        bd.splice(index, 1);
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "livre supprimé",
            book
        })
    },


    
}
export default bookcontroller   