import React, { useState } from "react";
import { StyledRegister } from "./styledRegister";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <StyledRegister className="font-inter flex flex-col items-center">
      <nav className="flex items-center justify-around gap-3 pt-6 w-full max-w-[1200px]">
        <h1 className="text-2xl text-primary font-semibold">Kenzie Hub</h1>
        <Link
          to="/"
          className="bg-gray3 text-white px-2 py-1 rounded-md text-sm"
        >
          Voltar
        </Link>
      </nav>
      <RegisterForm />
    </StyledRegister>
  );
}
