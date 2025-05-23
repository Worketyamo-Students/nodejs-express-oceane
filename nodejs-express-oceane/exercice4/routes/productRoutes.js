import { Router } from "express";
import productController from "../controllers/productControllers.js";
const router3 = Router();

router3.post ('/products',productController.createProduct)
router3.get ('/products', productController.getAllProducts);
router3.get('/products/:id',productController.getProductById);
router3.put ('/products/:id',productController.updateProduct);
router3.delete ('/products/:id',productController.deleteProduct);
router3.get('/products/promos',productController.getProductsWithPromo);

export default router3;
