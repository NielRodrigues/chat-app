import axios from "axios";
import { io } from "socket.io-client";

const baseURL = process.env.REACT_APP_API_BASE_URL
const secret = process.env.REACT_APP_SECRET

export const socket = io("http://localhost:3001");

socket.on("connect", () => {
  console.log("Conectado ao servidor Socket.io");
});

socket.on("disconnect", () => {
  console.log("Desconectado do servidor Socket.io");
});


const config = {
  headers: {
    "authorization": secret,
    "Content-Type": "application/json"
  }
}

export async function register(data) {

  const status = await axios.post(`${baseURL}users`, data, config)
  .then(response => response.status)
  .catch(error => error.response.status)

  return status
}

export async function login(data) {

  const status = await axios.post(`${baseURL}login`, data, config)
  .then(response => [response.data, response.status])
  .catch(error => [error.response.data, error.response.status])

  return status
}

export async function getChats(id) {

  const data = await axios.get(`${baseURL}chats/${id}`, config)
  .then(response => response.data)
  .catch(error => error.response.data)

  return data
}


export async function getUser(id) {

  const data = await axios.get(`${baseURL}users/${id}`, config)
  .then(response => [response.data, response.status])
  .catch(error => [error.response.data, error.response.status])

  return data
}

export async function addUser(data){

  socket.emit("addContact", data)

  const status = await axios.post(`${baseURL}conversation`, data, config)
  .then(response => response.status)
  .catch(error => error.response.status)

  return status
}

export async function attUser(data) {

  const status = await axios.put(`${baseURL}users/${data.id}`, data, config)
  .then(response => response.status)
  .catch(error => error.response.status)

  return status
}

export async function getMessagesConversation(id, personId){

  const conversationParticipantData = await axios.get(`${baseURL}participants/${id}/${personId}`, config)
  .then(response => response.data)
  .catch(error => error.response.data)

  const responseData = await axios.get(`${baseURL}conversation/${conversationParticipantData.conversation_id}`, config)
  .then(response => response.data)
  .catch(error => error.response.data)

  return responseData

}

export async function sendMessage(data) {

  socket.emit("sendMessage", data)

  const status = await axios.post(`${baseURL}messages`, data, config)
  .then(response => response.status)
  .catch(error => error.response.status)

  return status
}

export async function file(formData){

  const configForm = {
    headers: {
      "authorization": secret,
      "Content-Type": "multipart/form-data"
    }
  }

  const responseData = axios.post(`${baseURL}files`, formData, configForm)
    .then((response) => [response.status, response.data])
    .catch((error) => [error.response.status, error.response.data])

  return responseData
}
