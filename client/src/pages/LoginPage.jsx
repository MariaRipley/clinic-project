import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="bg-cover bg-center h-screen bg-[url('/main-bg.jpg')] flex justify-center items-center">
      <div className="max-w-md w-full bg-gradient-to-b from-sky-200 to-sky-800 p-10 rounded-lg flex justify-center items-center">
        <form onSubmit={onSubmit}>
          {signinErrors.map((error, i) => (
            <div key={i} className="bg-red-500 p-2 text-white text-center my-2">
              {error}
            </div>
          ))}
          <h1 className="text-2xl font-bold text-sky-900">Login</h1>
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
            Login
          </button>
          <p className="flex gap-x-2 justify-between">
            Don't have an account?{" "}
            <Link to="/register" className="text-sky-500 font-bold">
              Sign up
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
