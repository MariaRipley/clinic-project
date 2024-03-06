import Patient from "../models/patient.model.js";

//Obtener todos los pacientes de un usuario
export const getPatients = async (req, res) => {
  const patients = await Patient.find({
    user: req.user.id,
  }).populate("user");
  res.json(patients);
};

//Crear un nuevo paciente
export const createPatient = async (req, res) => {
  const { nombre, apellido1, apellido2, fechaNacimiento, descripcion } =
    req.body;

  const newPatient = new Patient({
    nombre,
    apellido1,
    apellido2,
    fechaNacimiento,
    descripcion,
    user: req.user.id,
  });

  const savedPatient = await newPatient.save();
  res.json(savedPatient);
};

//Obtener un solo paciente de un usuario
export const getPatient = async (req, res) => {
  const patient = await Patient.findById(req.params.id).populate("user");
  if (!patient)
    return res.status(404).json({ message: "Paciente no encontrado" });
  res.json(patient);
};

//Eliminar paciente
export const deletePatient = async (req, res) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);
  if (!patient)
    return res.status(404).json({ message: "Paciente no encontrado" });
  return res.sendStatus(204);
};

//Modificar paciente
export const updatePatient = async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!patient)
    return res.status(404).json({ message: "Paciente no encontrado" });
  res.json(patient);
};
