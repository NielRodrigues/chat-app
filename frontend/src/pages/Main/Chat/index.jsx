import React, { useContext, useEffect } from 'react'
import { Container } from './style'

import HeaderChat from '../../../components/HeaderChat'
import ChatMessages from '../../../components/ChatMessages'
import SendMessage from '../../../components/SendMessage'
import { ChatContext } from '../../../contexts/chatContext'

function Chat() {

  const { userSelected } = useContext(ChatContext);
  useEffect(() => {}, [userSelected])

  return (
    <Container>
      <HeaderChat />
      <ChatMessages />
      <SendMessage />
    </Container>
  )
}

export default Chat
