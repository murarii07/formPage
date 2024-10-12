// src/NotFound.js
import React from 'react';

function NotFound() {
  const styles = {
    div: { textAlign: 'center', padding: '50px' },
    h1: { fontSize: '50px' },
    p: { fontSize: '20px' },
    a: { fontSize: '18px', color: 'blue', textDecoration: 'underline' }

  }
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>404</h1>
      <p style={styles.p}>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={styles.a}>
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;
