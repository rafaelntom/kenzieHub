import styled from "styled-components";

export const StyledDashboard = styled.div`
  background-color: var(--gray4);
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    padding-top: 20px;
    align-items: center;
    justify-content: space-around;
    max-width: 1200px;
    width: 100%;
    align-self: center;
  }

  h1 {
    color: var(--primary);
  }

  @media (min-width: 650px) {
    .user-info {
      display: flex;
      justify-content: space-around;
    }
  }

  .user-info h3 {
    color: var(--gray0);
    font-size: 1.125rem;
    font-weight: 600;
  }

  .user-info span {
    color: var(--gray1);
    font-size: 0.875rem;
  }

  .tech-content {
    width: 80%;
    max-width: 1200px;
    background-color: #212529;
    margin-top: 30px;
    border-radius: 4px;
  }

  .tech-content ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px 0;
  }

  .tech-content li {
    display: flex;
    justify-content: space-between;
    padding: 4px 20px;
    width: 85%;
    background-color: #121214;
    border-radius: 4px;
    align-items: center;
    transition: background-color 0.5s;
  }

  .tech-content li:hover {
    background-color: #343b41;
    cursor: pointer;
  }

  .tech-content li h3 {
    color: white;
    font-weight: 600;
  }

  .tech-content li span {
    color: var(--gray1);
    font-size: 14px;
  }
`;
