import React, { useEffect, useContext } from "react";
import { StyledDashboard } from "./styledDashboard";
import { useNavigate } from "react-router-dom";
import DashboardHearder from "../../components/DashHeader/DashboardHearder";
import Modal from "../../components/Modal/Modal";
import UserTechs from "../../components/UserTechs/UserTechs";
import EditTechModal from "../../components/EditTechModal/EditTechModal";
import { UserContext } from "../../providers/UserContext";

export default function Dashboard() {
  const userToken = localStorage.getItem("@kenzieHubToken");
  const userId = localStorage.getItem("@kenzieHubUserId");
  const navigate = useNavigate();
  const { getUserInfo, user, openModal, setOpenModal, editTechModal } =
    useContext(UserContext);

  useEffect(() => {
    async function render() {
      await getUserInfo(userId);
      if (!userToken) {
        localStorage.removeItem("@kenzieHubUserId");
        localStorage.removeItem("@kenzieHubToken");
        navigate("/");
      }
    }

    render();
  }, [openModal, editTechModal]);

  return (
    <StyledDashboard className="font-inter relative">
      {openModal && <Modal />}
      {editTechModal && <EditTechModal />}

      <DashboardHearder />

      <main className="flex flex-col items-center">
        <section className="border-t border-b border-gray2 w-full flex justify-center py-5 my-4">
          <div className="user-info w-full max-w-[1200px] px-3">
            {user ? (
              <>
                <h3>Olá, {user.name}!</h3>
                <span>{user.course_module}</span>
              </>
            ) : (
              <h3>Carregando usuário...</h3>
            )}
          </div>
        </section>

        <section className="tech-info w-full flex flex-col items-center">
          <div className="tech-header flex w-full justify-around items-center max-w-[1200px]">
            <h3 className="text-white text-lg tracking-wider">Tecnologias</h3>
            <span
              onClick={() => setOpenModal(true)}
              className="bg-gray3 text-white px-3 py-1 rounded-xl text-2xl cursor-pointer"
            >
              +
            </span>
          </div>

          <div className="tech-content">
            <ul>
              <UserTechs />
            </ul>
          </div>
        </section>
      </main>
    </StyledDashboard>
  );
}
