import React, {useState, useEffect, useRef} from 'react'
import { HiEye, HiEyeOff } from "react-icons/hi"
import { Container, Field, Text, InputDiv, Input, ShowPassoword, Button, Line, LinkDiv, Ask, Link } from '../../../components/Form/style'
import Logo from '../../../components/Logo'

import { register } from '../../../services/api'

function Form() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [resp, setResp] = useState("⠀");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmaPassword, setShowConfirmaPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const Password = useRef();
  const ConfirmPassword = useRef();

  const Submit = async () => {
    if(!name || !email || !password || !confirmPassword) {
      setResp("Preencha todos os campos")
      return
    }
    if(password !== confirmPassword){
      setResp("Senhas não combinam")
      return
    }
    setLoading(true)

    const data = {
      name,
      email,
      password
    }

    const code = await register(data);
    setLoading(false)
    
    if(code === 201) {
      setResp("Usuário cadastrado com sucesso")
      return
    }
    if(code === 400) {
      setResp("Usuário já cadastrado")
      return
    }

    setResp("Erro ao cadastrar usuário")
  }

  useEffect(() => {
    if(showPassword) Password.current.type = "text"
    else Password.current.type = "password"

    if(showConfirmaPassword) ConfirmPassword.current.type = "text"
    else ConfirmPassword.current.type = "password"
  }, [showPassword, showConfirmaPassword])


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
        <Text>Nome</Text>
        <InputDiv>
          <Input type='text' name='name' id='name' placeholder='Digite seu nome...' onChange={(event) => setName(event.target.value)} required/>
        </InputDiv>
      </Field>

      <Field>
        <Text>E-mail</Text>
        <InputDiv>
          <Input type='email' name='email' id='email' placeholder='Digite seu e-mail...' onChange={(event) => setEmail(event.target.value)} required/>
        </InputDiv>
      </Field>

      <Field>
        <Text>Senha</Text>
        <InputDiv>
          <Input ref={Password} type='password' name='password' id='password' placeholder='Digite sua senha...' onChange={(event) => setPassword(event.target.value)} required/>
          <ShowPassoword type='button' onClick={() => setShowPassword(!showPassword)}>
            { showPassword ? <HiEyeOff /> : <HiEye />}
          </ShowPassoword>
        </InputDiv>
      </Field>

      <Field>
        <Text>Confirmar senha</Text>
        <InputDiv>
          <Input ref={ConfirmPassword} type='password' name='confirm-password' id='confirm-password' placeholder='Confirme a sua senha...' onChange={(event) => setConfirmPassword(event.target.value)} required/>
          <ShowPassoword type='button' onClick={() => setShowConfirmaPassword(!showConfirmaPassword)}>
            { showConfirmaPassword ? <HiEyeOff /> : <HiEye />}
          </ShowPassoword>
        </InputDiv>
      </Field>

      <Button type='submit' onClick={Submit}>Registrar</Button>
      <Line />

      <LinkDiv>
        <Ask>Já possui uma conta?</Ask>
        <Link to="/login">Entrar</Link>
      </LinkDiv>

    </Container>
  )
}

export default Form
