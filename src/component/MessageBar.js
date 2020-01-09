import React, { useState } from 'react';


const inputStyle = {
    borderRadius: 10,
    border: 'none',
    fontSize: 16,
    padding: 10,
    marginRight: 10,
    flexGrow: 1,
  };
  
  const buttonStyle = {
    borderRadius: 10,
    cursor: 'pointer',
    fontSize: 20,
    color: '#336E7B',
    fontWeight: 'bold',
    padding: 10,
    flexGrow: 1,
    border: '3px solid #336E7B',
    backgroundColor: 'transparent',
  };

const MessageBar = props => {
  const [message, setMessage] = useState("");

  const handleChange = i => {
    setMessage(i.target.value);
  };


  const handleSubmit = () => {
    if (message) {
      props.handleMessageSubmit(message);
      setMessage("");
    }
  };

    return (
      <div style={{ display: 'flex', padding: 10 }}>
        <input
         value={message}
         onChange = {handleChange}
         placeholder= "votre message"
         type="text" style={inputStyle} />
        <br />
        <button onClick={handleSubmit}>Envoyer</button>
      </div>
    );
};
  
  export default MessageBar;