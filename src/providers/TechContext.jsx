import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { apiWithToken } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { setEditTechModal } = useContext(UserContext);

  async function updateTechInfo(techId, techBody) {
    try {
      const response = await apiWithToken.put(
        `users/techs/${techId}`,
        techBody
      );
      toast.success("Alteração realizada com sucesso!");
      setEditTechModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUserTech(techId) {
    try {
      const response = await apiWithToken.delete(`users/techs/${techId}`);
      toast.success("Tech deletada com sucesso!");
      setEditTechModal(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TechContext.Provider value={{ updateTechInfo, deleteUserTech }}>
      {children}
    </TechContext.Provider>
  );
};
