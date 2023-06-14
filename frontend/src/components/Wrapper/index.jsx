import React from "react";
import { BiMessageSquareDots } from "react-icons/bi"
import { Container, Logo, Title } from "./style";

function Wrapper(){
  return (

    <Container>
      <Logo>
        <BiMessageSquareDots />
        <Title>ChatAPP</Title>
      </Logo>
    </Container>

  );
};

export default Wrapper;
