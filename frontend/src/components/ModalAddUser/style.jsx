import styled from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from "react-modal";

Modal.setAppElement("#root")

export const Container = styled(Modal)`
  width: 90%;
  max-width: 480px;
  height: 220px;
  background-color: #111b21;
  border-radius: 12px;
  box-shadow: 0 0 15px #111b2150;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span{
    color: #FFF;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  width: 90%;
  text-align: center;
  color: #FFF;
  font-weight: 600;
  margin: 0;
`;

export const Task = styled.h2`
  font-size: 16px;
  width: 100%;
  text-align: center;
  color: #fff;
  margin: 0;
  margin-top: 4px;
`;

export const Form = styled.form`
  width: 90%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Desc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  margin: 0;
  margin-bottom: 4px;
`;

export const AddUser = styled.div`
  width: 100%;
  max-width: 100%;
  height: 40px;
  background-color: #202c33;
  border-radius: 8px;
  display: flex;
  align-items: center;

  &::placeholder{color: #aebac1;}
`;

export const Input = styled.input`
  width: 95%;
  margin-left: 4px;
  margin-right: 4px;
  height: 32px;
  font-size: 16px;
  color: #FFF;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder{color: #aebac1;}
`;

export const Buttons = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const CancelButton = styled.button`
  height: 100%;
  width: 45%;
  border-radius: 12px;
  border: 2px solid #d81313;
  background-color: #d81313;
  outline: none;
  font-size: 16px;
  font-family: 'Sora' sans-serif;
  color: white;
  cursor: pointer;
  transition: all .4s;
  font-weight: 500;

  &:hover{background-color: #c20a0a; border: 2px solid #c20a0a;}
  &:active{background-color: #d81313; border: 2px solid #d81313;}
`;

export const AddButton = styled.button`
  height: 100%;
  width: 45%;
  border-radius: 12px;
  border: 2px solid #00a884;
  background-color: #00a884;
  outline: none;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: all .4s;
  font-weight: 500;

  &:hover{background-color: #006650; border: 2px solid #006650;}
  &:active{background-color: #00a884; border: 2px solid #00a884;}
`;
