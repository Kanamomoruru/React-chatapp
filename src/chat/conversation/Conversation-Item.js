import React from 'react';

import '../conversation/Conversation-Item.css';

const ConversationItem = (props) => {
  return (
    <div className="conversation active">
       <img />
      <div className="created-date">{props.conversation.title}</div>
      <div className="conversation-message">{}</div>
    </div>
  );
}

export default ConversationItem;