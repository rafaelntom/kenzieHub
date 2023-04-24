import styled from "styled-components";

export const StyledLoginForm = styled.div`
  background-color: var(--gray3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px;
  border-radius: 4px;
  width: 80%;

  @media (min-width: 650px) {
    max-width: 520px;
  }

  form {
    width: 100%;
  }

  label {
    color: white;
    padding-bottom: 4px;
  }

  input {
    border: 1px solid var(--gray0);
    border-radius: 4px;
    text-indent: 2px;
    outline: none;
    margin-bottom: 25px;
    padding: 4px;
    background-color: var(--gray2);
    color: white;
  }

  button {
    width: 100%;
    padding-block: 10px;
    border-radius: 4px;
    font-size: 0.875rem;
  }

  .no-account {
    padding-block: 20px;
    color: var(--gray1);
    font-size: 12px;
    text-align: center;
  }

  a {
    background-color: var(--gray1);
    color: var(--gray0);
    width: 100%;
    padding-block: 10px;
    border-radius: 4px;
    text-align: center;
    font-size: 0.875rem;
  }
`;
