import styled from "styled-components";
import background from "../../assets/images/background-messages.png";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8696a050;
  }
`;

export const Message = styled.div`
  width: auto;
  max-width: 40%;
  min-width: 72px;
  height: auto;
  background-color: #202c33;
  border-radius: 8px;
  border-top-left-radius: 0;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 16px;
  font-size: 16px;
  color: #FFF;
  padding: 4px;
  padding-bottom: 24px;
  padding-left: 8px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: relative;

  &.me{
    background-color: #005c4b;
    border-radius: 8px;
    border-top-right-radius: 0;
    margin-left: 0px;
    margin-right: 16px;
    align-self: flex-end;
  }
`;

export const DateInfo = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 4px;
  right: 4px;
  color: #AEBAC1;
`;
