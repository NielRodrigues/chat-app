import React, { useContext, useState } from 'react'
import { Container, Input } from './style'
import { ChatContext } from '../../contexts/chatContext'
import { sendMessage } from '../../services/api';

function SendMessage() {

  const [text, setText] = useState()

  const { userLoged, conversationId } = useContext(ChatContext);
  const userId = JSON.parse(userLoged)[0].id

  const ENTER_KEY = 13

  async function send(event) {
    if(event.which === ENTER_KEY)
    {
      if(!text){
        return
      }

      const data = {
        conversation_id: conversationId,
        user_id: userId,
        message: text
      }

      await sendMessage(data)
      setText("")
    }
  }

  return (
    <Container>
      <Input type='text' value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event) => send(event)} name='message' id='message' placeholder='Mensagem' />
    </Container>
  )
}

export default SendMessage
