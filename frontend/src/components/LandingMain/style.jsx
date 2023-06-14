import styled  from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 84vh;
  height: 100%;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 8px #111b2140;
  margin-top: -128px;
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 300;
  margin: 0;
  margin-left: 24px;
  margin-top: 16px;
  color: #41525d;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  @media (max-width: 556px) {
    font-size: 48px;
  }

  @media (max-width: 425px) {
    font-size: 40px;
  }
`;


