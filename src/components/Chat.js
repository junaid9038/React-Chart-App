import React from 'react'
import cam from '../img/cam.png';
import user from '../img/user.png';
import more from '../img/more.png';
import Messages from './Messages';
import Input from "./Input";


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Junaid</span>
        <div className="chatIcons">
          <img src={cam} alt="" width="30" height="30" />
          <img src={user} alt="" width="30" height="30" />
          <img src={more} alt="" width="30" height="30" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
