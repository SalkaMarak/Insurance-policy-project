import React, { useState } from 'react';

function Header() {
    const[isAdmin, setIsAdmin] = useState(false);
    const[isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="header-container">
        <a className="logo" href='/home'><bold>Policy Place</bold></a>
        {isLoggedIn == false ? <a href="/login">Login</a> : <a href="/login">Logout</a>}
      </div>
    </>
  )
}

export default Header
