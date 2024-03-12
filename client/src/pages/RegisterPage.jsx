import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/patients");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="bg-cover bg-center h-screen bg-[url('/main-bg.jpg')] flex justify-center items-center">
      <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 h-1/2 sm:h-1/2 md:h-1/2 lg:h-1/2 xl:h-1/2 bg-gradient-to-b from-sky-200 to-sky-800 p-4 rounded-lg flex justify-center items-center">
        <form onSubmit={onSubmit}>
          {Array.isArray(registerErrors) &&
            registerErrors.map((error, i) => (
              <div key={i} className="bg-red-500 p-2 text-white">
                {error}
              </div>
            ))}

          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-sky-100 text-sky-900 px-4 py-2 rounded-md my-2"
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-sky-100 text-sky-900 px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-sky-100 text-sky-900 px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button
            type="submit"
            className="text-sky-50 bg-sky-900 p-1 rounded-md my-2"
          >
            Register
          </button>
          <p className="flex gap-x-2 justify-between">
            Already have an account?{" "}
            <Link to="/login" className="text-sky-500 font-bold">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
