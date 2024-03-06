import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patients.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPatientSchema } from "../schemas/patient.schema.js";

const router = Router();

router.get("/patients", authRequired, getPatients);
router.get("/patients/:id", authRequired, getPatient);
router.post(
  "/patients",
  authRequired,
  validateSchema(createPatientSchema),
  createPatient
);
router.delete("/patients/:id", authRequired, deletePatient);
router.put("/patients/:id", authRequired, updatePatient);

export default router;
