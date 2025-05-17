import { Router } from "express";
import bookcontroller from "../controllers/bookControllers.js";
const router = Router();

router.get("/books", bookcontroller.getAllBooks);
router.get("/books/:id", bookcontroller.getAllBooksByID);
router.post("/books", bookcontroller.createBooks)

router.put('/books/:id', bookcontroller.updateBook)
router.delete('/books/:id', bookcontroller.deleteBook)

export default router;
