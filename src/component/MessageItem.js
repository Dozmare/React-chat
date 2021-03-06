import React from 'react';
import PropTypes from "prop-types";
import Emoji from "react-emoji-render";

const MessageItem = ({message}) => {
  return (
    <li
      style={{
        marginBottom: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
      }}
    >
      <small>@{message.username} </small>
      <br/>
      <Emoji text={message.body}/>
    </li>
  );
  
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired
}

export default MessageItem;
