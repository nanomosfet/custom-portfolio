import React from 'react';

const Nav = ({ children }) => (
  <div className="row">
    <div className="col-md">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 mx-3 fixed-top">
        {children}
      </nav>
    </div>
  </div>

)

export default Nav
