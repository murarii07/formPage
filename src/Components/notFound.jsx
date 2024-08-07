// src/NotFound.js
import React from 'react';

function NotFound(){
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '50px' }}>404</h1>
      <p style={{ fontSize: '20px' }}>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={{ fontSize: '18px', color: 'blue', textDecoration: 'underline' }}>
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;
