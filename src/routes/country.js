import { Router } from "express";
import Controller from "../controllers/country";

const { addCountry } = Controller;

const router = Router();
router.post("/country", addCountry);

export default router;