import React from 'react';
import Section from '../components/Section2';
import aboutImage from '../assets/about2.jpg';
import visionImage from '../assets/vision2.jpg';
import missionImage from '../assets/mission2.jpg';

const AboutUs = () => {
    return (
        <div style={styles.container}>

            <h1 style={styles.mainTitle}>About Us</h1>
            <Section
                backgroundImage={aboutImage}
            />
            <Section
                backgroundImage={visionImage}
            />
            <Section
                backgroundImage={missionImage}
            />
        </div>
    );
};

const styles = {
    container: {
        padding: '50px 0',
        backgroundColor: 'black',
        fontFamily: 'Arial, sans-serif',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    mainTitle: {
        textAlign: 'center',
        fontSize: '48px',
        marginBottom: '50px',
        color: 'white',
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

export default AboutUs;
