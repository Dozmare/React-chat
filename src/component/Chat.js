import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import React, { useState } from 'react';
import {addmessages} from './redux/action/addmessages/'

const chatStyle = {
    borderRadius: 10,
    fontFamily: "Montserrat",
    width: 400,
    backgroundColor: "#A2DED0",
    padding: 10,
    display: "flex",
    flexDirection: "column"
  };

  const titleStyle = {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 30
  };
/*
const Chat = () => {
    return (
      <div style={chatStyle}>
        <div style={titleStyle}>Chat</div>
  
        <MessageList />
        <MessageBar />
      </div>
    );
  };
  */
const Chat = () => {
  const [messages, setMessages] = useState([]);    const handleMessageSubmit = message => {
      setMessages([...messages, {body: message, username:"Neidra"}]);
        };
      return (
        <div>
            <div>
                Chat
            </div>
          <MessageList messages={messages}/>
          <MessageBar handleMessageSubmit={handleMessageSubmit}/>
        </div>
      );
};

const mapStateToProps = (state) => {
  return {
    messages : state.message.entities
  }
}
const mapDispatchToPath = dispath => {
  return {
    addmessages: dispath(addmessages())
  } 
};

export default Chat;