import React, { useContext, useEffect, useState, useRef } from 'react'
import { Container, Message, DateInfo } from './style'

import { ChatContext } from '../../contexts/chatContext';
import { getMessagesConversation, socket } from '../../services/api';

function ChatMessages() {

  const refBody = useRef()
  const { userSelected, userLoged, setConversationId, conversationId } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newMessages, setNewMessages] = useState([]);


  const user = JSON.parse(userLoged)[0]

  useEffect(() => {
    setLoading(true)
    setNewMessages([])
    async function getMessages() {
      const data = await getMessagesConversation(user.id, userSelected[4])
      setConversationId(data.id)
      setMessages(data.Messages)
      setLoading(false)
    }
    getMessages();

  }, [userSelected])


  useEffect(() => {
    const scrollToBottom = () => {
      if (refBody.current) {
        refBody.current.scrollTop = refBody.current.scrollHeight;
      }
    };

    setTimeout(scrollToBottom, 0);
  }, [loading])

  useEffect(() => {
    socket.on("newMessage", (message) => {
      if(message.conversation_id !== conversationId) {
        return
      }
      const newMessage = { ...message, id: new Date()};

      setNewMessages((prevMessages) => [...prevMessages, newMessage]);

      socket.emit("messageReceived", message);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [conversationId])


  useEffect(() => {
    if(refBody.current && refBody.current.scrollHeight > refBody.current.offsetHeight) {
      refBody.current.scrollTop = refBody.current.scrollHeight - refBody.current.offsetHeight
    }
  }, [newMessages])

  if(loading) {
    return(
      <Container ref={refBody}>Carregando...</Container>
    )
  }

  return (
    <Container ref={refBody}>
      {
        messages.map((item) =>
          item.user_id === user.id ?
          (
            <Message key={item.id} className='me'>
              {item.message}
              <DateInfo>{
                `${String((new Date(item.createdAt).getDate())).padStart(2, "0")}/${String((new Date(item.createdAt).getMonth()+1)).padStart(2, "0")}/${new Date(item.createdAt).getFullYear()}
                ${String((new Date(item.createdAt).getHours())).padStart(2, "0")}:${String((new Date(item.createdAt).getMinutes())).padStart(2, "0")}`
              }</DateInfo>
            </Message>
          )
          :
          (
            <Message key={item.id}>
              {item.message}
              <DateInfo>{
                `${String((new Date(item.createdAt).getDate())).padStart(2, "0")}/${String((new Date(item.createdAt).getMonth()+1)).padStart(2, "0")}/${new Date(item.createdAt).getFullYear()}
                ${String((new Date(item.createdAt).getHours())).padStart(2, "0")}:${String((new Date(item.createdAt).getMinutes())).padStart(2, "0")}`
              }</DateInfo>
            </Message>
          )
        )
      }
      {
        newMessages.map((item) =>
          // eslint-disable-next-line no-nested-ternary
          item.conversation_id === conversationId ?
          (
            item.user_id === user.id ?
            (
              <Message key={item.id} className='me'>
                {item.message}
                <DateInfo>{
                  `${String((new Date(item.id).getDate())).padStart(2, "0")}/${String((new Date(item.id).getMonth()+1)).padStart(2, "0")}/${new Date(item.id).getFullYear()}
                  ${String((new Date(item.id).getHours())).padStart(2, "0")}:${String((new Date(item.id).getMinutes())).padStart(2, "0")}`
                }</DateInfo>
              </Message>
            )
            :
            (
              <Message key={item.id}>
                {item.message}
                <DateInfo>{
                  `${String((new Date(item.id).getDate())).padStart(2, "0")}/${String((new Date(item.id).getMonth()+1)).padStart(2, "0")}/${new Date(item.id).getFullYear()}
                  ${String((new Date(item.id).getHours())).padStart(2, "0")}:${String((new Date(item.id).getMinutes())).padStart(2, "0")}`
                }</DateInfo>
              </Message>
            )
          ) : null
        )
      }
    </Container>
  )
}

export default ChatMessages
