import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { Authentication, ChannelListContainer, ChannelContainer } from "./";
import "./Chats.css";

const cookies = new Cookies();

const api_key = import.meta.env.STREAM_APP_KEY;
const client = StreamChat.getInstance(api_key);
const authToken = false;
// const authToken = cookies.get("stream");

if(authToken) {
  client.connectUser({
    id: cookies.get("id"),
    jwt: cookies.get("jwt"),
    stream: cookies.get("stream"),
    username: cookies.get("username"),
    hashedPassword: cookies.get("hashedPassword"),
  }, authToken)
}

function ChatComp() {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // if(!authToken) return <Authentication />

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer 
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer 
           isCreating={isCreating}
           setIsCreating={setIsCreating}
           isEditing={isEditing}
           setIsEditing={setIsEditing}
           createType={createType}
        />
      </Chat>
    </div>
  );
}

export default ChatComp;
