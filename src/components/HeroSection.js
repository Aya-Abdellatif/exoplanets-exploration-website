import React from 'react';

const HeroSection = () => {
    return (
        <section style={styles.heroSection}>
            <h1 style={styles.heroText}>
                <span style={styles.exoText}>EXO</span>
                <span style={styles.plorersText}>PLORERS</span>
            </h1>
        </section>
    );
};

const styles = {
    heroSection: {
        textAlign: 'center',
        marginTop: '5px',
        zIndex: 2,
    },
    heroText: {
        fontSize: '50px',
        fontWeight: 'bold',
        color: '#fff',
    },
    exoText: {
        color: '#fff',
    },
    plorersText: {
        color: 'transparent',
        WebkitTextStroke: '2px white',
        textStroke: '2px white',
    },
};

export default HeroSection;
