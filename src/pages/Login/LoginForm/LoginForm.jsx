import React, { useContext, useEffect } from "react";
import { StyledLoginForm } from "./styledLoginForm";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { UserContext } from "../../../providers/UserContext";

export default function LoginForm() {
  const userToken = localStorage.getItem("@kenzieHubToken");
  const navigate = useNavigate();
  const { userLogin } = useContext(UserContext);

  useEffect(() => {
    if (userToken) {
      navigate("/dashboard");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  async function onSubmit(data) {
    await userLogin(data);
  }

  return (
    <StyledLoginForm>
      <h2 className="text-white font-medium pb-3">Login</h2>
      <form
        action=""
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="">E-mail</label>
        {errors.email && (
          <span className="text-xs font-normal text-red-500 mb-1">
            {errors.email.message}
          </span>
        )}
        <input
          {...register("email")}
          type="email"
          placeholder="Digite seu e-mail"
        />

        <label htmlFor="">Senha</label>
        {errors.password && (
          <span className="text-xs font-normal text-red-500 mb-1">
            {errors.password.message}
          </span>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Digite sua senha"
        />

        <button className="bg-primary text-white" type="submit">
          Entrar
        </button>
        <span className="no-account">Ainda não possui uma conta?</span>
        <Link to="/register">Cadastre-se</Link>
      </form>
    </StyledLoginForm>
  );
}
