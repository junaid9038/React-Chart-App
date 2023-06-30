import React from 'react'

const Navber = () => {
  return (
    <div className=' Navbar'>
        <span className="logo"> JA Chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>Junaid</span>
            <button> logout</button>
        </div>
    </div>
  )
}

export default Navber
