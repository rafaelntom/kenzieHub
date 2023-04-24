import React, { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export default function UserTechs() {
  const { user, setEditTechModal, setCurrentTech } = useContext(UserContext);

  function findTechDetails(id) {
    const foundTech = user.techs.find((tech) => tech.id === id);
    setEditTechModal(true);
    setCurrentTech(foundTech);
  }

  if (user) {
    if (user.techs.length > 0) {
      return user.techs.map((tech) => {
        return (
          <li
            key={tech.id}
            id={tech.id}
            onClick={() => findTechDetails(tech.id)}
          >
            <h3 className="truncate">{tech.title}</h3>
            <span>{tech.status}</span>
          </li>
        );
      });
    } else {
      return (
        <h3 className="text-center text-stone-400 px-2">
          Usuário sem techs, cadastre uma nova!
        </h3>
      );
    }
  } else {
    return <h3 className="text-white">Carregando Techs do usuário...</h3>;
  }
}
