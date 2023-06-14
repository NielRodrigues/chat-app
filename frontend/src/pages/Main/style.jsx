import styled  from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #222E35;
  display: flex;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 768px) {
    display: block;
  }
`;
