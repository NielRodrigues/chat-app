import styled  from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 220px;
  background-color: #00a884;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  width: 90%;
  max-width: 1000px;

  svg{
    width: 40px;
    height: 40px;
    color: white;
  }
`;

export const Title = styled.h4`
  font-size: 20px;
  color: white;
  font-weight: 600;
  margin: 0;
  margin-left: 12px;
`;
