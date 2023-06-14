import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 83%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

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
