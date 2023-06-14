import styled from "styled-components";

export const Container = styled.div`
  height: 64px;
  min-height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #202C33;
  justify-content: space-around;
`;

export const Input = styled.input`
  width: 88%;
  height: 40px;
  border-radius: 8px;
  border: none;
  outline: none;
  padding-left: 12px;
  font-size: 18px;
  color: #FFF;
  background-color: #2A3942;

  &::placeholder{color: #aebac1;}
`;
