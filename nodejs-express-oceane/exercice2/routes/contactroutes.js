import { Router } from "express";
import contactController from "../controllers/contactControllers.js";
const router1 = Router();

router1.post ('/contacts',contactController.createContact);
router1.get ('/contacts',contactController.getAllContacts);
router1.get ('/contacts/:id', contactController.getContactById);
router1.put ('/contacts/:id', contactController.updateContact);
router1.delete ('/contacts/:id', contactController.deleteContact);
router1.get ('/status',contactController.getStatus);

export default router1;
