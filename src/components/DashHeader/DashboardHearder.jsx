import React from "react";
import { Link } from "react-router-dom";

export default function DashboardHearder() {
  function userLogOut() {
    localStorage.removeItem("@kenzieHubToken");
    localStorage.removeItem("@kenzieHubUserId");
  }

  return (
    <nav>
      <h1 className="text-2xl text-primary font-semibold">Kenzie Hub</h1>
      <Link
        onClick={userLogOut}
        to="/"
        className="bg-gray3 text-white px-2 py-1 rounded-md text-sm"
      >
        Sair
      </Link>
    </nav>
  );
}
