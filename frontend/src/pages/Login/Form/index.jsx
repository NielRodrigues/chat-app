import React, {useState, useEffect, useRef, useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import { HiEye, HiEyeOff } from "react-icons/hi"

import { Container, Field, Text, InputDiv, Input, ShowPassoword, Button, Line, LinkDiv, Ask, Link } from '../../../components/Form/style'
import Logo from '../../../components/Logo'

import { ChatContext } from '../../../contexts/chatContext'

import { login } from '../../../services/api'

function Form() {

  const { setUserLoged } = useContext(ChatContext);
  const navigate = useNavigate()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [resp, setResp] = useState("⠀");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)

  const Password = useRef();

  useEffect(() => {
    if(showPassword) Password.current.type = "text"
    else Password.current.type = "password"
  }, [showPassword])

  const Submit = async () => {
    if(!email || !password) {
      setResp("Preencha todos os campos")
    }
    setLoading(true)
    const data = {
      email,
      password
    }

    const [responseData, code] = await login(data);
    setLoading(false)

    if(code === 200) {
      setUserLoged(localStorage.setItem("userChatApp", JSON.stringify(responseData)))
      navigate("/")
      return
    }
    if(code === 400) {
      setResp("Senha incorreta")
      return
    }
    if(code === 404) {
      setResp("Usuário não cadastrado")
      return
    }

    setResp("Erro ao entrar")
  }

  if(loading) {
    return(
      <Container>
        Carregando...
      </Container>
    )
  }

  return (
    <Container onSubmit={(event) => event.preventDefault()}>
      <Logo />

      <span>{resp}</span>

      <Field>
        <Text>E-mail</Text>
        <InputDiv>
          <Input type='email' name='email' id='email' placeholder='Digite seu e-mail...' onChange={(event) => setEmail(event.target.value)} required/>
        </InputDiv>
      </Field>

      <Field>
        <Text>Senha:</Text>
        <InputDiv>
          <Input ref={Password} type='password' name='password' id='password' placeholder='Digite sua senha...'  onChange={(event) => setPassword(event.target.value)} required/>
          <ShowPassoword type='button' onClick={() => setShowPassword(!showPassword)}>
            { showPassword ? <HiEyeOff /> : <HiEye />}
          </ShowPassoword>
        </InputDiv>
      </Field>

      <Button type='submit' onClick={Submit}>Entrar</Button>
      <Line />

      <LinkDiv>
        <Ask>Não possui uma conta?</Ask>
        <Link to="/register">Registre</Link>
      </LinkDiv>

    </Container>
  )
}

export default Form
