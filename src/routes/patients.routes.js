import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patients.controller.js";

const router = Router();

router.get("/patients", authRequired, getPatients);
router.get("/patients/:id", authRequired, getPatient);
router.post("/patients", authRequired, createPatient);
router.delete("/patients/:id", authRequired, deletePatient);
router.put("/patients/:id", authRequired, updatePatient);

export default router;
