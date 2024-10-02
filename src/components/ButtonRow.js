import React from 'react';

const ButtonRow = () => {
    return (
        <div style={styles.buttonRow}>
            <button style={styles.button}>Exoplanet Story</button>
            <button style={styles.button}>Launch the Hologram</button>
            <button style={styles.button}>Explore AI Predictions</button>
            <button style={styles.button}>Start Planetary Quiz</button>
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
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default ButtonRow;
