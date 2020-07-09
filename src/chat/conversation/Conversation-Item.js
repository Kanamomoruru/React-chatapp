import React from 'react';

import '../conversation/Conversation-Item.css';

const ConversationItem = (props) => {
  return (
    <div >
        <img src={props.conversations.imageUrl} alt={props.conversations.imageAlt} />
        <div className="title-text">{props.conversations.title}</div>
        <div className="created-date">{props.conversations.createdAt}</div>
        <div className="conversation-message">
            {props.conversations.latestMessageText}
        </div>
    </div>
  );
}

export default ConversationItem;