import { Link } from "react-router-dom";
import "../index.css";
import { useForm } from "react-hook-form";

function onSubmit(data) {
  console.log(data);
}

function LoginScreen() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className=" bg-zinc-800  h-screen w-screen flex justify-center items-center ">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2 bg-white border rounded-lg p-8">
              <h1 className=" flex justify-center pb-4 text-3xl font-extrabold ">
                Login
              </h1>
              <input
                className="w-64 h-10 pl-2 border rounded-md border-slay-200 focus:outline-none focus:border-blue-400"
                name="email"
                type="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              <div>
                <input
                  className="w-64 h-10 pl-2 border rounded-md border-slay-200 focus:outline-none focus:border-blue-400"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                  {...register("password")}
                />
                <div className="flex justify-between">
                  <p className=" text-xs text-blue-800 hover:text-blue-600 hover:underline">
                    Esqueceu a conta?
                  </p>
                  <Link
                    to="register"
                    className=" text-xs pl-6 text-blue-800  hover:text-blue-600 hover:underline"
                  >
                    Cadastre-se aqui
                  </Link>
                </div>
              </div>
              <input
                className=" w-64 h-10 border bg-blue-700 rounded-md hover:bg-blue-500"
                type="submit"
                onSubmit={onSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
