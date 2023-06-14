import React from "react";
import { Container } from "./style";
import Wrapper from "../../components/Wrapper";
import LandingMain from "../../components/LandingMain";
import Form from "./Form";

function Register(){
  return (

    <Container>
      <Wrapper />
      <LandingMain title="Registrar" form={<Form />} />
    </Container>

  );
};

export default Register;
