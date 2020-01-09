import React, { PureComponent, useState } from "react";
import MessageItem from "./MessageItem";
import PropTypes from 'prop-types';

const style = { borderColor: "black"};
/* (Moi)
class MessageList extends PureComponent {
  state = { messages: [] };

  render() {
    return (
      <ul style={style}>
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </ul>
    );
  }
}

/*class MessageList extends PureComponent {
    render() {
    const {messages} = this.props;
      return (
    <ul style={style}>
        <MessageItem />
        <MessageItem />
        <MessageItem />
     </ul>
     
      );
    }
  }*/
// correction
/*const MessageList = () => {
  const [messages, setMessages] = useState ([
    { body: "Bonjour" ,username: "moi"},
    { body: "Bonjour" ,username: "jean"}
]);

const handlerOnClick = () =>
{const newMessage = {body: "Bonjour" ,username: "moi"};
setMessages([messages, newMessage]);
};

  return (
    <ul style = {style}>
      {messages.map((message, a) =>{
        return ( <MessageItem
          handlerOnClick={handlerOnClick}
          key={a}
          message = {message} />);
      })}
    </ul>
  )
}*/
const MessageList = ({ messages }) => {
  return(
      <ul>
          {messages.map((message, a) =>{
              return <MessageItem key={a} message={message} />;
          })}
          {messages.lenght === 0 && <li>
              Pas de nouveau message !!!
              </li>}
      </ul>
  );
};
export default MessageList;
