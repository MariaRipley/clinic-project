import { z } from "zod";

export const createPatientSchema = z.object({
  nombre: z.string({
    required_error: "Name is required",
  }),
  apellido1: z.string({
    required_error: "Lastname is required",
  }),
  apellido2: z.string().optional(),
  fechaNacimiento: z.string().datetime().optional(),
  descripcion: z
    .string({
      required_error: "Description must be a string",
    })
    .optional(),
});
