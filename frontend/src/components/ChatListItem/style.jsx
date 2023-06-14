import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 72px;
  min-height: 72px;
  display: flex;
  align-items: center;
  transition: all .2s;
  cursor: pointer;

  &:hover{background-color: #202c33;}
  &.active{background-color: #2a3942;}


`;

export const Picture = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  margin-left: 12px;
  object-fit: cover;
  object-position: center;
`;

export const TextArea = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 12px;
  margin-right: 4px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #8696a050;
`;

export const Name = styled.h2`
  font-size: 20px;
  color: #FFF;
  margin: 0;
  margin-top: 12px;
  font-weight: 400;
`;


export const Message = styled.h3`
  font-size: 12px;
  color: #aebac1;
  margin: 0;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
