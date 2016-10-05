import React from 'react';
import Nav from 'nav';

export default ({children}) => {
  return (
    <div>
      <div>
        <div>
          <Nav/>
          <p>Main.jsx Rendered</p>
          {children}
        </div>
      </div>
    </div>
  );
}
