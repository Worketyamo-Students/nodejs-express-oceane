import fs, { write } from "fs"
import { pipeline } from 'node:stream';
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

const productController= {
    getAllProducts:  (req,res) =>{
        res.status(200).json({
            message: "ok",
            bd:database(),
        })
         console.log(database())

    },
    getProductById : (req , res) =>{
// filtrer les donnees selon l'id
    const { id , name , price , pu , qte} = req.params
    if(!req.params.id){
        return res.status(400).json({
            message: "id manquant"
        })
    }
    const product = database().find(b => b.id === parseInt(req.params.id));
    if(!product){
        return res.status(404).json({
            message: "produit non trouvé"
        })
    }
    res.status(200).json({
        message: "ok",
        product
    });
    },
    createProduct: (req , res) =>{
    //ajouter un nouvel evenement
        const {name , price , pu , qte} = req.body
        if(!name || !price || !pu || !qte){
                return res.status(400).json({message: "informations manquantes"})
        }
        // ecrire dans le fichier log.txt
        const bd = database()

        const newproduct = {
            id: bd.length > 0 ? bd[bd.length - 1].id + 1 : 1,
            name,
            price,
            pu,
            qte,
        }
        bd.push(newproduct)
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(201).json({
            message: "produit ajouté",
            product: newproduct
        })
    },
    updateProduct : (req , res) =>{
        //modifier un produit

        const {name , price, pu , qte} = req.body
        const {id} = req.params
        if(!name || !price || !pu || !qte){
            return res.status(400).json({
                message: "informations manquantes"
            })
        }
        const bd = database()
        const product = bd.find(b => b.id === parseInt(id));
        if(!product){
            return res.status(404).json({
                message: "produit non trouvé"
            })
        }
        product.name = name;
        product.price = price;
        product.pu = pu;
        product.qte = qte;
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "produit modifié",
            product
        })
    },
    deleteProduct : (req , res) =>{
        const {name , price , pu , qte} = req.body
        const {id} = req.params
        if(!name || !price || !pu || !qte){
            return res.status(400).json({
                message: "informations manquantes"
            })
        }
        const bd = database()
        const product = bd.find(b => b.id === parseInt(id));
        if(!product){
            return res.status(404).json({
                message: "produit non trouvé"
            })
        }
        const index = bd.indexOf(product);
        bd.splice(index, 1);
        writeDatajson(bd)
        writeDatacsv(bd)
        res.status(200).json({
            message: "produit supprimé",
            product
        })
    },
    getProductsWithPromo : (req , res) =>{
        const bd = database()
        const productsWithPromo = bd.filter(b => b.pu < b.price);
        if(productsWithPromo.length === 0){
            return res.status(404).json({
                message: "aucun produit en promo"
            })
        }
        res.status(200).json({
            message: "ok",
            productsWithPromo
        })
    },


}
export default productController