import React from 'react';
import HeroSection from '../components/HeroSection';
import ButtonRow from '../components/ButtonRow';
import backgroundImage from '../assets/background1.jpg'; // Import the image

const Home = () => {
    return (
        <div style={{ ...styles.container, backgroundImage: `url(${backgroundImage})` }}>
            <div style={styles.overlay}></div>
            <HeroSection />
            <ButtonRow />
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'poppins',
        overflow: 'hidden',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
    },
};

export default Home;
