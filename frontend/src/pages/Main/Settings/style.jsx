import styled  from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #222E35;

  span{color: #AEBAC1}

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8696a050;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-left: 24px;
  font-size: 16px;
  font-weight: 500;
  color: #AEBAC1;
  cursor: pointer;

  svg{
    height: 24px;
    width: 24px;
    margin-right: 12px;
    color: #aebac1;
  }
`;


export const SwitchPicture = styled.div`
  display: flex;
  margin-top: 24px;
  margin-left: 24px;

  input {display: none;}
`;

export const Picture = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const ButtonSwitchPicture = styled.label`
  height: 24px;
  width: 24px;
  margin-left: 12px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  svg{
    width: 24px;
    height: 24px;
    color: white;
  }
`;

export const Form = styled.form`
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Text = styled.h4`
  font-size: 12px;
  margin: 0;
  margin-bottom: 4px;
  color: #F8F8F8;
`;

export const Input = styled.input`
  height: 32px;
  width: 240px;
  padding-left: 8px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: #F8F8F8;
  background-color: #2A3942;
  border: 1px solid #2A3942;

  &::placeholder{color: #aebac1;}
  &:disabled{opacity: 0.7; cursor: not-allowed;}

`;


export const SendButton = styled.button`
  width: 128px;
  height: 48px;
  border-radius: 8px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #F8F8F8;
  border: none;
  outline: none;
  background-color: #00a884;
  cursor: pointer;
  transition: all .4s;

  &:hover{background-color: #006650;}
  &:active{background-color: #00a884;}
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-left: 24px;
  margin-top: 48px;
  cursor: pointer;
  color: #d81313;

  svg{
    width: 28px;
    height: 28px;
    color: #d81313;
    margin-right: 8px;
  }
`;
