import React from 'react'
import Attach from "../img/Attach.png";
import and from "../img/and.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='type someting>>>' />
      <div className="send">
        <img src={Attach} alt=""  width="20" height="20"/>
        <input type="file" style={{display:'none'}} id ="file" />
        <label htmlFor="file">
          <img src={and} alt=""  width="20" height="20"/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
