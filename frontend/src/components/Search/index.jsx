import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { Container, SearchDiv, Input } from './style'

function Search() {
  return (
    <Container>
      <SearchDiv>
        <AiOutlineSearch />
        <Input type='text' name='search' id='search' placeholder='Pesquisar conversa'/>
      </SearchDiv>
    </Container>
  )
}

export default Search
