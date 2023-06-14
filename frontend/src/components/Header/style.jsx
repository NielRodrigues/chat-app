import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 59px;
  display: flex;
  align-items: center;
  background-color: #202C33;
  justify-content: space-between;
`;


export const Picture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 16px;
  object-fit: cover;
  object-position: center;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const Buttons = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    height: 18px;
    width: 18px;
    color: #aebac1;
  }

  &:focus{background-color: #374248;}

`;
