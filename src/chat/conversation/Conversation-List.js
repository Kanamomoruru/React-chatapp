import React from 'react';
import ConversationItem from '../conversation//Conversation-Item'

import './Conversation-List.css';

function ConversationList(props) {
  const selectedConverstionIndex = 0;
  const conversationItems = props.conversations.map((conversation, index) => {
    return <ConversationItem 
      key={index} 
      isActive={index === selectedConverstionIndex}
      conversation={conversation} />
  });

  return (
    <div id="conversation-container">
      {conversationItems}
        <ConversationItem />
    </div>
  );
}

export default ConversationList;