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
            <div className="grid gap-2 ">
              <h1 className=" flex justify-center">Login</h1>
              <input
                className="w-64 h-6 border border-black"
                name="email"
                type="email"
                {...register("email")}
              />
              <div>
                <input
                  className="w-64 h-6 border border-black "
                  name="password"
                  type="password"
                  {...register("password")}
                />
                <div className="flex justify-between">
                  <p className=" text-xs text-blue-800">Esqueceu a conta?</p>
                  <p className=" text-xs pl-6 text-blue-800 ">
                    Cadastre-se aqui
                  </p>
                </div>
              </div>
              <input
                className=" w-64 h-6 border border-black "
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
