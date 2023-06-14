import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, TextBox, Title, Form, Desc, Text, AddUser, Input, Buttons, AddButton, CancelButton} from './style';
import "./style.css"
import { addUser } from '../../services/api';
import { ChatContext } from '../../contexts/chatContext';

function ModalAddUser({ isOpen, onRequestClose }) {

  const { userLoged } = useContext(ChatContext);

  const [user, setUser] = useState()
  const [info, setInfo] = useState()

  const yourData = JSON.parse(userLoged)[0]

  async function add() {
    if(!user){
      setInfo("Insira um email")
      return
    }
    if(user === yourData.email){
      setInfo("Você não pode adicionar você mesmo")
      setUser("")
      return
    }
    setInfo("Carregando...")
    const data = {
      id: yourData.id,
      email: user,
    }

    const code = await addUser(data)
    setInfo("")
    if(code === 201){
      setInfo("Usuário adicionado com sucesso")
      return
    }
    if(code === 404){
      setInfo("Usuário não encontrado")
      return
    }
    if(code === 402){
      setInfo("Este usuário já foi adicionado")
      return
    }
    setInfo("Erro ao adicionar usuário")
  }


  return (
    <Container isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='modal-overlay'
      className='modal-content'
    >
      <TextBox>
        <Title>Adicionar usuário</Title>
      </TextBox>
      <span>{info}</span>
      <Form onSubmit={(event) => event.preventDefault()}>
        <Desc>
          <Text>Email:</Text>
          <AddUser>
            <Input value={user} onChange={(event) => setUser(event.target.value)} type='email' name='email' id='email' placeholder='Digite...' required/>
          </AddUser>
        </Desc>

        <Buttons>
          <CancelButton type='button' onClick={onRequestClose}>Cancelar</CancelButton>
          <AddButton type='subimit' onClick={() => add()}>Adcionar</AddButton>
        </Buttons>
      </Form>
    </Container>
  )
}

ModalAddUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ModalAddUser
