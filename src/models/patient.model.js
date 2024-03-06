import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido1: {
      type: String,
      required: true,
    },
    apellido2: {
      type: String,
    },
    fechaNacimiento: {
      type: Date,
    },
    descripcion: {
      type: String,
    },
    //Relacionar los pacientes con el profesional que los ha creado
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Patient", patientSchema);
