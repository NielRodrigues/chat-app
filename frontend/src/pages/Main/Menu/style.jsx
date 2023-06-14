import styled from "styled-components";

export const Container = styled.div`
  width: 408px;
  min-width: 408px;
  height: 100%;
  background-color: #111B21;
  border-right: 1px solid #8696a050;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }
`;
