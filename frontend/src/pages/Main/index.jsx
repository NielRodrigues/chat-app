import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";

import Menu from "./Menu";
import Chat from "./Chat";
import Settings from "./Settings";

import { ChatContext } from "../../contexts/chatContext";
import { login } from "../../services/api";

function Main(){

  const { userSelected, settingsPage, userLoged, setUserLoged } = useContext(ChatContext);
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getUser(){
      const userData = JSON.parse(localStorage.getItem("userChatApp"))

      setLoading(true)
      if(!userLoged) {
        navigate("/login")
        return
      }

      try{
        const data = {
          email: userData[0].email,
          password_hash: userData[0].password_hash
        }

        const [responseData, code] = await login(data)

        if(code === 200) {
          setLoading(false)

          localStorage.setItem("userChatApp", JSON.stringify(responseData))
          const user = localStorage.getItem("userChatApp")
          setUserLoged(user)

          navigate("/")
          return
        }
        setUserLoged(false)
        navigate("/login")
      }
      catch{
        setUserLoged(false)
        navigate("/login")
      }
    }
    getUser()
  }, [])

  if(loading) {
    return (
      <Container>
        Carregando....
      </Container>
    )
  }

  return (
    <Container>
      <Menu />
      {
        // eslint-disable-next-line no-nested-ternary
        settingsPage ? <Settings /> :
        (
          userSelected ? <Chat /> : null
        )
      }
    </Container>
  );
};

export default Main;
