import fs from "fs"
function database() {
    const bd = JSON.parse(fs.readFileSync("./database.json", "utf8"));
    return bd;
}
function writeData(bd) {
    fs.writeFileSync("./database.json", JSON.stringify(bd, null, 2));
}

database()
const bookcontroller= {
    getAllBooks :(req,res) =>{
        res.status(200).json({
            message: "ok",
            bd:database()
            
        })
    },
    getAllBooksByID : (req , res) =>{

    },
    createBooks : (req , res) =>{

    },
    updateBook : (req , res) =>{

    },
    deleteBook : (req , res) =>{

    },


    // addchien : (req,res) => {
    //     const { nom , age} = req.body
    //     if (!nom || !age) {
    //         return res.status(400).json({
    //             message: "informations incompletes"
    //         })
    //     }
    //     const bd = database()
    //     const samedog = bd.some(
    //         (d) => d.nom === nom  && d.age === age
    //       );
    //       if (samedog) {
    //         return res
    //           .status(409) // 409 Conflict
    //           .json({ message: "Ce chien existe déjà dans la base de données" });
    //       }
      
    //       const newdog = {
    //         id: bd.length > 0 ? bd[bd.length - 1].id + 1 : 1,
    //         nom,
    //         age,
    //       };
      
    //       bd.push(newdog);
    //       writeData(bd);
      
    //       res.status(201).json(Dog);
              
    // },

}
export default bookcontroller   