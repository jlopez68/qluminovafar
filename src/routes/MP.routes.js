import { Router } from "express";
import { renderMain1 } from "../controllers/MP.controllers.js";

const router = Router();

router.get("main-1", renderMain1);

export default router;



