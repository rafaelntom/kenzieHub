import styled from "styled-components";

export const StyledLogin = styled.div`
  background-color: var(--gray4);
  height: 100vh;

  button:active,
  a:active {
    -webkit-box-shadow: inset 1px 1px 10px #333;
    -moz-box-shadow: inset 1px 1px 10px #333;
    box-shadow: inset 1px 1px 10px #333;
  }

  input {
    background-color: var(--gray0);
  }

  button,
  a {
    transition: background 0.3s;
  }

  button:hover {
    background: var(--negative);
  }

  a:hover {
    background: var(--gray2);
  }

  h1 {
    color: var(--primary);
  }
`;
