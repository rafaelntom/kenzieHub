import React from "react";
import { StyledLogin } from "./styledLogin";
import LoginForm from "./LoginForm/LoginForm";

export default function Login() {
  return (
    <StyledLogin className="font-inter flex flex-col items-center w-full justify-center">
      <h1 className="w-max text-2xl font-semibold pt-5 pb-10">Kenzie Hub</h1>
      <LoginForm />
    </StyledLogin>
  );
}
