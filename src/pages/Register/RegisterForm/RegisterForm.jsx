import React, { useContext } from "react";
import { StyledRegisterForm } from "./styledRegisterForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./formSchema";
import Input from "../../../components/Input/Inputs";
import { UserContext } from "../../../providers/UserContext";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const { registerUser } = useContext(UserContext);

  async function onSubmit(data) {
    await registerUser(data);
  }

  return (
    <StyledRegisterForm>
      <h2 className="text-white font-semibold">Crie sua conta</h2>
      <span className="pb-4 text-gray1 text-sm">
        Rapido e grátis, vamos nessa
      </span>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="nome"
          type="text"
          label="Nome"
          placeholder="Digite aqui seu nome"
          {...register("name")}
          error={errors.name}
        />

        <Input
          id="email"
          type="email"
          label="E-mail"
          placeholder="Digite aqui seu email"
          {...register("email")}
          error={errors.email}
        />

        <Input
          id="password"
          type="password"
          label="Crie uma senha"
          placeholder="Digite aqui sua senha"
          {...register("password")}
          error={errors.password}
        />

        <Input
          id="confirmPassword"
          type="password"
          label="Confirme a sua senha"
          placeholder="Digite aqui sua senha"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
        />

        <Input
          id="bio"
          type="text"
          label="Bio"
          placeholder="Insira uma breve descrição"
          {...register("bio")}
          error={errors.bio}
        />

        <Input
          id="contact"
          type="text"
          label="Contato"
          placeholder="Opção de contato"
          {...register("contact")}
          error={errors.contact}
        />

        <label htmlFor="">Selecionar módulo</label>
        {errors.course_module && (
          <span className="text-xs font-normal text-red-500 mb-1">
            {errors.course_module.message}
          </span>
        )}
        <select
          {...register("course_module")}
          className="py-2 rounded-md"
          name="modulo"
          id=""
        >
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>

        <button
          className="bg-primary-negative py-3 rounded-md mt-5 text-white"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </StyledRegisterForm>
  );
}
