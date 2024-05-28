import "../index.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const RegisterScreen = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: "http://localhost:3000/register",
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
  };

  return (
    <div className="bg-zinc-800  h-screen w-screen flex justify-center items-center ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <input
            className="w-64 h-6 border border-black"
            name="username"
            {...register("username")}
          />
          <input
            className="w-64 h-6 border border-black"
            name="email"
            type="email"
            {...register("email")}
          />
          <input
            className="w-64 h-6 border border-black"
            name="password"
            type="password"
            {...register("password")}
          />
          <input
            className="w-64 h-6 border border-black"
            type="submit"
            onSubmit={onSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
