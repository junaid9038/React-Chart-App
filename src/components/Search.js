import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='find a user'/>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <div className="userChartInfo">
                <span>Junaid</span>
            </div>
        </div>
      
    </div>
  )
}

export default Search
