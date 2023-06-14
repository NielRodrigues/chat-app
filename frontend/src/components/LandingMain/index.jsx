import React from 'react'
import PropTypes from "prop-types";
import { Container, Title } from './style'

function LandingMain({title, form}) {
  return (
    <Container>
      <Title>{title}</Title>
      {form}
    </Container>
  )
}

LandingMain.propTypes = {
  title: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
}

export default LandingMain
