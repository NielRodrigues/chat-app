import React from "react";
import { Container } from "./style";
import Wrapper from "../../components/Wrapper";
import LandingMain from "../../components/LandingMain";
import Form from "./Form";

function Login(){
  return (

    <Container>
      <Wrapper />
      <LandingMain title="Seja bem-vindo(a)" form={<Form />} />
    </Container>

  );
};

export default Login;
