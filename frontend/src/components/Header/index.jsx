import React, { useState, useContext } from 'react'
import { BsFillChatLeftTextFill } from "react-icons/bs"
import { SlOptionsVertical } from "react-icons/sl"
import { Container, Picture, Options, Buttons } from './style'

import ModalAddUser from '../ModalAddUser'

import { ChatContext } from '../../contexts/chatContext'

function Header() {

  const { setSettingsPage, userLoged } = useContext(ChatContext);
  const baseURL = process.env.REACT_APP_API_BASE_URL

  const [modalAddUserisOpen, setModalAddUserisOpen] = useState(false)
  const user = JSON.parse(userLoged)[0]

  console.log("Picture >>> ", user.picture)

  const handleOpenModalAddUser = () => {
    setModalAddUserisOpen(true)
  }

  const handleCloseModalAddUser = () => {
    setModalAddUserisOpen(false)
  }

  return (
    <Container>
      <ModalAddUser isOpen={modalAddUserisOpen} onRequestClose={handleCloseModalAddUser} />
      { user.picture ?
        (
          <Picture src={`${baseURL}tmp/uploads/${user.picture}`} alt='Profile Picture'/>
        )
        :
        (
          <Picture src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt='Profile Picture'/>
        )
      }
      <Options>
        <Buttons onClick={handleOpenModalAddUser}>
          <BsFillChatLeftTextFill />
        </Buttons>

        <Buttons onClick={() => setSettingsPage(true)}>
          <SlOptionsVertical />
        </Buttons>
      </Options>
    </Container>
  )
}

export default Header
