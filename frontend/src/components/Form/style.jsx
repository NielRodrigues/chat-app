import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.form`
  width: 400px;
  border-radius: 4px;
  border: 1px solid #111b2171;
  margin-top: 40px;
  margin-right: 12px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span{
    margin: 0;
    font-weight: 600;
    margin-top: 8px;
    color: #d81313;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-right: 0;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 12px;
`;

export const Text = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: #111b21;
  margin: 0;
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #41525d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  height: 24px;
  width: 80%;
  padding: 4px;
  font-size: 14px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #41525d;
`;

export const ShowPassoword = styled.button`
  height: 28px;
  width: 28px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 8px;

  svg{
    width: 24px;
    height: 24px;
    color: #111b21;
    margin-top: 2px;
    transition: all .1s;

    &:hover{opacity: 0.9}
  }
`;


export const Button = styled.button`
  height: 36px;
  width: 90%;
  border: none;
  border-radius: 4px;
  background-color: #00a884;
  font-size: 16px;
  font-weight: 600;
  color: #FFF;
  margin-top: 32px;
  margin-bottom: 24px;
  cursor: pointer;
  transition: all .2s;

  &:hover{background-color: #176b5b}
  &:active{background-color: #00a884}

`;
export const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: #111b2171;
  margin-bottom: 24px;
`;

export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const Ask = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #111b21;
  margin: 0;
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: #00a884;
  margin: 0;
  margin-left: 4px;
`;
