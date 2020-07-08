import React from 'react';
import ConversationItem from '../conversation//Conversation-Item'

import './Conversation-List.css';

function ConversationList(conversation) {
  return (
    <div id="conversation-container">
        <ConversationItem />
    </div>
  );
}

export default ConversationList;