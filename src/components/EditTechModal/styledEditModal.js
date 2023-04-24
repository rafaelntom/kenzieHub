import styled from "styled-components";

export const StyledEditTechModal = styled.div`
  background-color: rgba(59, 58, 58, 0.8);
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: absolute;
  color: white;

  @media (min-width: 650px) {
    .editModal-container {
      max-width: 550px;
    }
  }

  .editModal-container {
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

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    width: 100%;
  }

  .btn-container .save {
    background-color: var(--primary-negative);
  }
  .btn-container .delete {
    background-color: var(--gray1);
  }
  .btn-container button {
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 0.875rem;
  }
`;
