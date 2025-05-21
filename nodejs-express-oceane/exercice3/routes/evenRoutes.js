import { Router } from "express";
import eventcontroller from "../controllers/eventControllers.js";
const router2 = Router();

router2.get("/events", eventcontroller.getAllEvents);
router2.get("/events/:id", eventcontroller.getAllEventsById);
router2.post("/events", eventcontroller.createEvents)

router2.put('/events/:id', eventcontroller.updateEvent)
router2.delete('/events/:id', eventcontroller.deleteEvent)

export default router2;
