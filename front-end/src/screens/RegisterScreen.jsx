import "../index.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const router = useNavigate();
  function onSubmit(data) {
    axios({
      method: "post",
      url: "http://localhost:3000/register",
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
    router("/");
  }
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-zinc-800  h-screen w-screen flex justify-center items-center ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2 bg-white border rounded-lg p-8">
          <p className="flex justify-center pb-4 text-3xl font-extrabold">
            Registro
          </p>
          <input
            className="w-64 h-10 pl-2 border rounded-md border-slay-200 focus:outline-none focus:border-blue-400"
            name="username"
            placeholder="Username"
            {...register("username")}
          />
          <input
            className="w-64 h-10 pl-2 border rounded-md border-slay-200 focus:outline-none focus:border-blue-400"
            name="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <input
            className="w-64 h-10 pl-2 border rounded-md border-slay-200 focus:outline-none focus:border-blue-400"
            name="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <input
            className="w-64 h-10 border bg-blue-700 rounded-md hover:bg-blue-500"
            type="submit"
            onSubmit={onSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
