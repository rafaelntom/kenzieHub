import { createContext, useState } from "react";
import { api, apiWithToken } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [editTechModal, setEditTechModal] = useState(false);
  const [currentTech, setCurrentTech] = useState();
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();

  async function registerUser(userData) {
    try {
      const response = await api.post("/users", userData);
      toast.success("Usuário criado com sucesso! Aguarde o redirecionamento");

      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  async function userLogin(userInfo) {
    try {
      const response = await apiWithToken.post("/sessions", userInfo);
      localStorage.setItem("@kenzieHubToken", response.data.token);
      localStorage.setItem("@kenzieHubUserId", response.data.user.id);
      navigate("/dashboard");
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  async function getUserInfo(id) {
    try {
      const response = await apiWithToken.get(`/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        userLogin,
        getUserInfo,
        user,
        setUser,
        openModal,
        setOpenModal,
        editTechModal,
        setEditTechModal,
        currentTech,
        setCurrentTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
