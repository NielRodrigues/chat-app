import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const SearchDiv = styled.div`
  width: 100%;
  height: 35px;
  margin: 0 12px;
  border-radius: 8px;
  background-color: #202c33;
  display: flex;
  align-items: center;

  svg{
    margin-left: 12px;
    height: 18px;
    width: 18px;
    color: #aebac1;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 24px;
  margin-left: 12px;
  font-size: 14px;
  margin-right: 8px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #F8F8F8;

  &::placeholder{color: #aebac1;}
`;
