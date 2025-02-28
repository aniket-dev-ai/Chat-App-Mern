import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatPage = () => {
    const [chats, setchats] = useState([])
  const fetchchats = async () => {
    const { data } = await axios.get("/api/chats");
    setchats(data);
    console.log(data);
  };

  useEffect(() => {
    fetchchats();
  }, []);
  return <div className="bg-green-400">
    {
        chats.map((chat) => (
            <div key={chat._id}>
            <h1>{chat.chatName}</h1>
            {/* <p>{chat.message}</p> */}
            </div>
        ))
    }
   
  </div>;
};

export default ChatPage;
