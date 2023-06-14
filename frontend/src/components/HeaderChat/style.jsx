import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 59px;
  min-height: 59px;
  display: flex;
  align-items: center;
  background-color: #202C33;

  svg{
    height: 24px;
    width: 24px;
    margin-left: 16px;
    color: #aebac1;
    cursor: pointer;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;


export const Picture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 16px;
  object-fit: cover;
  object-position: center;
`;


export const TextArea = styled.div`
  width: 90%;
  height: 100%;
  margin-left: 12px;
  margin-right: 4px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  font-size: 20px;
  color: #FFF;
  margin: 0;
  margin-top: 8px;
  font-weight: 400;
`;


export const Email = styled.h3`
  font-size: 12px;
  color: #aebac1;
  margin: 0;
  font-weight: 400;
`;
