import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: rgba(59, 58, 58, 0.8);
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: absolute;
  color: white;

  @media (min-width: 650px) {
    .modal-container {
      max-width: 550px;
    }
  }

  .modal-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: var(--gray3);
    top: 30%;
  }

  header {
    background-color: var(--gray2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    gap: 40px;
  }

  header button {
    color: var(--gray1);
    font-weight: bold;
    margin-right: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 85%;
    padding-top: 10px;
  }

  input,
  select {
    margin-bottom: 20px;
    border: 1px solid var(--gray0);
    padding: 10px 5px;
    background-color: var(--gray2);
    outline: none;
  }

  label {
    margin-bottom: 5px;
  }

  form button {
    background-color: var(--primary);
    width: 100%;
    align-self: center;
    padding: 5px 0;
    margin-bottom: 32px;
    border-radius: 4px;
  }
`;
