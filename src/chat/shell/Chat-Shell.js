import React from 'react';
import ChatSearch from '../search/Chat-Search';
import ConversationList from '../conversation/Conversation-List';

import './Chat-Shell.css';

function ChatSell() {
  return (
    <div id="chat-container">
        <ChatSearch />
        <ConversationList />
    </div>
  );
}

export default ChatSell;