import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer } from "./";
import "./Chats.css";

const api_key = import.meta.env.STREAM_APP_KEY;
const client = StreamChat.getInstance(api_key);

function ChatComp() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer></ChannelListContainer>
        <ChannelContainer></ChannelContainer>
      </Chat>
    </div>
  );
}

export default ChatComp;
