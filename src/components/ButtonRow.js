import React from 'react';

import { Link } from 'react-router-dom';

const ButtonRow = () => {
  return (
    <div style={styles.buttonRow}>
      <Link to="/system-list" style={{ textDecoration: 'none' }}>
        <button style={styles.button}>System List</button>
      </Link>
      <Link to="/educational" style={{ textDecoration: 'none' }}>
        <button style={styles.button}>Educational</button>
      </Link>
      <Link to="/quiz-list" style={{ textDecoration: 'none' }}>
        <button style={styles.button}>Quiz List</button>
      </Link>
      <Link to="/quiz" style={{ textDecoration: 'none' }}>
        <button style={styles.button}>Start Quiz</button>
      </Link>
    </div>
  );
};


const styles = {
    buttonRow: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '50px',
        zIndex: 2,
    },
    button: {
        padding: '15px 30px',
        fontSize: '18px',
        backgroundColor: '#a44fb5',
        color:'#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default ButtonRow;
