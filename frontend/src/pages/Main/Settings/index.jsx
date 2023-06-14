import React, { useContext, useState } from 'react'
import { BiLogOut } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import { TbPhotoEdit } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { Container, Back, SwitchPicture, Picture, ButtonSwitchPicture, Form, InputDiv, Text, Input, SendButton, Logout } from './style'

import { ChatContext } from '../../../contexts/chatContext';
import { attUser, file } from '../../../services/api';

function Settings() {

  const navigate = useNavigate()
  const baseURL = process.env.REACT_APP_API_BASE_URL

  const { setSettingsPage, userLoged } = useContext(ChatContext)
  const user = JSON.parse(userLoged)[0]

  const [name, setName] = useState(user.name)
  const [info, setInfo] = useState("")
  const [image, setImage] = useState(user.picture)

  async function att(){
    setInfo("Carregando...")

    const data = {
      id: user.id,
      name,
    }

    const code = await attUser(data)
    setInfo("")
    if(code === 200){
      setInfo("Atualizado com sucesso")
      return
    }
    setInfo("Erro ao atualizar")
  }

  function logout() {
    localStorage.removeItem("userChatApp")
    navigate("/login")
  }

  async function changePicture(files) {
    const formData = new FormData();
    formData.append("file", files[0])

    const [code, response] = await file(formData)

    setImage(response.path)

    if(code === 200){
      const data = {
        id: user.id,
        picture: response.path
      }
      await attUser(data)

      user.picture = response.path
      localStorage.setItem("userChatApp", JSON.stringify([user]))
    }
  }

  return (
    <Container>
      <Back onClick={() => setSettingsPage(false)}>
        <FiArrowLeft />
        Voltar
      </Back>

      <SwitchPicture>
        { image ?
          (
            <Picture src={`${baseURL}tmp/uploads/${image}`} alt='Profile Picture'/>
          )
          :
          (
            <Picture src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt='Profile Picture'/>
          )
        }
        <input type="file" id='addPhoto' name="addPhoto" onChange={(event) => changePicture(event.target.files)} />
        <ButtonSwitchPicture for="addPhoto">
          <TbPhotoEdit />
        </ButtonSwitchPicture>
      </SwitchPicture>

      <Form onSubmit={(event) => event.preventDefault()}>
        <span>{info}</span>
        <InputDiv>
          <Text>E-mail</Text>
          <Input type='email' value={user.email} disabled />
        </InputDiv>

        <InputDiv>
          <Text>Nome</Text>
          <Input type='text' value={name} onChange={(event) => setName(event.target.value)} />
        </InputDiv>

        <SendButton onClick={() => att()}>
          Atualizar
        </SendButton>

      </Form>

      <Logout onClick={() => logout()}>
        <BiLogOut />
        Sair
      </Logout>
    </Container>
  )
}

export default Settings
