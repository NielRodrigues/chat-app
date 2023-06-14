import React, { useContext } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { Container, Picture, TextArea, Name, Email } from './style'

import { ChatContext } from '../../contexts/chatContext';

function HeaderChat() {

  const baseURL = process.env.REACT_APP_API_BASE_URL
  const { userSelected, setUserSelected } = useContext(ChatContext);

  if(!userSelected) {
    <Container>
      Selecione
    </Container>
  }

  return (
    <Container>
      <FiArrowLeft onClick={() => setUserSelected(false)} />
      { userSelected[2] ?
        (
          <Picture src={`${baseURL}tmp/uploads/${userSelected[2]}`} alt='Profile Picture' />
        )
        :
        <Picture src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt='Profile Picture' />
      }
      <TextArea>
        <Name>{userSelected[0]}</Name>
        <Email>{userSelected[1]}</Email>
      </TextArea>
    </Container>
  )
}

export default HeaderChat
