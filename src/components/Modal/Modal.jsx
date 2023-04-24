import React, { useContext, useEffect } from "react";
import { StyledModal } from "./styledModal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { modalFormSchema } from "./ModalFormSchema/modalFormSchema";
import { apiWithToken } from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../../providers/UserContext";

export default function Modal() {
  const { setOpenModal } = useContext(UserContext);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: zodResolver(modalFormSchema) });

  async function onSubmit(data) {
    await createUserTech(data);
    toast;
  }

  async function createUserTech(techData) {
    try {
      const response = await apiWithToken.post("users/techs", techData);
      toast.success("Tecnologia criada com sucesso!");
      setOpenModal(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <StyledModal role="modal">
      <div className="modal-container">
        <header>
          <span>Cadastrar Tecnologia</span>
          <button onClick={() => setOpenModal(false)}>X</button>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Nome</label>
          {errors.title && (
            <span className="text-xs font-normal text-red-500 mb-1">
              {errors.title.message}
            </span>
          )}
          <input type="text" {...register("title")} />

          <label htmlFor="">Selecionar Status</label>
          <select {...register("status")} name="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyledModal>
  );
}
