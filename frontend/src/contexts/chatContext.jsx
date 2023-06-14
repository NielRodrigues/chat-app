import React, { useEffect, useState, createContext } from 'react';
import PropTypes from "prop-types";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [data, setData] = useState();
  const [email, setEmail] = useState();
  const [userSelected, setUserSelected] = useState();
  const [settingsPage, setSettingsPage] = useState(false);
  const [conversationId, setConversationId] = useState()

  const [userLoged, setUserLoged] = useState();

  useEffect(() => {
    setUserLoged(localStorage.getItem("userChatApp"))
    console.log("\n\n\n >>> ", localStorage.getItem("userChatApp"))
  }, [userSelected, settingsPage, userLoged, data])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ChatContext.Provider value={{data, setData, userSelected, setUserSelected, email, setEmail, settingsPage, setSettingsPage, userLoged, setUserLoged, conversationId, setConversationId}}>
      {children}
    </ChatContext.Provider>
  )
}

ChatProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
