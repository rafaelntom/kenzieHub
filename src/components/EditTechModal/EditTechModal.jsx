import React, { useContext } from "react";
import { StyledEditTechModal } from "./styledEditModal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Input from "../Input/Inputs";
import { apiWithToken } from "../../services/api";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";

export default function EditTechModal() {
  const { setEditTechModal, currentTech } = useContext(UserContext);

  const { updateTechInfo, deleteUserTech } = useContext(TechContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: currentTech.title,
      status: currentTech.status,
    },
  });

  function onSubmit(data) {
    updateTechInfo(currentTech.id, data);
  }

  return (
    <StyledEditTechModal>
      <div className="editModal-container">
        <header>
          <span>Tecnologia detalhes</span>

          <button onClick={() => setEditTechModal(false)}>X</button>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            disabled="disabled"
            id="nome"
            type="text"
            label="Nome da tecnologia"
            placeholder=""
            {...register("title")}
            error={errors.title}
          />

          <label htmlFor="">Selecionar Status</label>
          <select {...register("status")} name="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <div className="btn-container">
            <button type="submit" className="save">
              Salvar Alterações
            </button>

            <button
              type="button"
              onClick={() => deleteUserTech(currentTech.id)}
              className="delete"
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyledEditTechModal>
  );
}
