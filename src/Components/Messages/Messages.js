import React from 'react';

import Message from "./Message/Message.js";

import './Messages.css';

import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        {messages.map((message, index) => (
            <div><Message message={message} name={name} /></div>
        ))}
    </ScrollToBottom>
)
export default Messages;