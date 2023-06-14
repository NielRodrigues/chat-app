import React, { useContext } from 'react'
import PropTypes from "prop-types"
import { Container, Message, Name, Picture, TextArea } from './style'
import { ChatContext } from '../../contexts/chatContext'

function ChatListItem({ picture, name, personId, email, message, userSelected }) {

  const baseURL = process.env.REACT_APP_API_BASE_URL
  const { setUserSelected, setSettingsPage } = useContext(ChatContext);

  if ( userSelected && userSelected[4] === personId) {
    return (
      <Container className='active'>
        { picture ?
          (
            <Picture src={`${baseURL}tmp/uploads/${picture}`} alt='Profile Picture' />
          )
          :
          <Picture src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt='Profile Picture' />
        }
        <TextArea>
          <Name>{name}</Name>
          <Message>{message}</Message>
        </TextArea>
      </Container>
    )
  }

  return (
    <Container onClick={() => {
      setUserSelected([name, email, picture, message, personId])
      setSettingsPage(false)
    }}>
      { picture ?
        (
          <Picture src={`${baseURL}tmp/uploads/${picture}`} alt='Profile Picture' />
        )
        :
        <Picture src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt='Profile Picture' />
      }
      <TextArea>
        <Name>{name}</Name>
        <Message>{message}</Message>
      </TextArea>
    </Container>
  )
}

ChatListItem.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  userSelected: PropTypes.string.isRequired,
  personId: PropTypes.number.isRequired,
}

export default ChatListItem
