import React, { useEffect, useState, useContext, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './style';
import ChatListItem from '../ChatListItem';
import { getChats, socket } from '../../services/api';
import { ChatContext } from '../../contexts/chatContext';

function ChatList() {
  const { data, setData, userSelected, setUserSelected, userLoged } = useContext(ChatContext);
  const [loading, setLoading] = useState(true);

  const chats = useCallback(async () => {
    const user = JSON.parse(userLoged);
    const response = await getChats(user[0].id);
    setData(response);
    setLoading(false);
  }, [userLoged, setData]);

  useEffect(() => {
    chats();

    socket.on("newContact", async (contact) => {
      socket.emit("contactReceived", contact);

      setTimeout(async () => {
        await chats()
      }, 5000);
    });

    return () => {
      socket.off("newContact");
    };
  }, []);

  useEffect(() => {}, [data]);

  if (loading) {
    return (<Container>Carregando...</Container>);
  }

  return (
    <Container>
      {data.map((item) => (
        <ChatListItem
          key={uuidv4()}
          picture={item.picture}
          personId={item.id}
          name={item.name}
          email={item.email}
          message="oi"
          userSelected={userSelected}
          setUserSelected={setUserSelected}
        />
      ))}
    </Container>
  );
}

export default ChatList;
