import styled from "styled-components";

export const StyledRegisterForm = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray3);
  padding: 34px 18px;
  width: 85%;
  border-radius: 5px;
  margin-bottom: 20px;

  @media (min-width: 650px) {
    max-width: 520px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  label {
    color: var(--gray0);
    font-size: 0.875rem;
    padding-bottom: 2px;
  }

  input {
    margin-bottom: 20px;
    outline: none;
    padding: 4px 2px;
    border-radius: 4px;
    background: var(--gray2);
    color: white;
    text-indent: 4px;
    font-size: 0.9375rem;
  }

  select {
    outline: none;
    background: var(--gray2);
    color: white;
  }
`;
