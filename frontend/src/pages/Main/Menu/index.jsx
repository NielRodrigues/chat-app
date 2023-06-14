import React from 'react'
import { Container } from './style'

import Header from '../../../components/Header'
import Search from '../../../components/Search'
import ChatList from '../../../components/ChatList'

function Menu() {
  return (
    <Container>
      <Header />
      <Search />
      <ChatList />
    </Container>
  )
}

export default Menu
