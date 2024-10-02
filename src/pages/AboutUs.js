import React from 'react';
import Section from '../components/Section';
import aboutImage from '../assets/about.jpg';
import visionImage from '../assets/vision.jpg';
import missionImage from '../assets/mission.jpg';
import backgroundImage from '../assets/background.jpg';

const AboutUs = () => {
    return (
        <div style={styles.container}>

            <h1 style={styles.mainTitle}>About Us</h1>
            <Section
                title="Who We Are"
                text="Our solution is designed to create an engaging and interactive learning platform for students to explore the wonders of exoplanets. By using multimedia, 3D animations, and interactive quizzes, we simplify complex scientific concepts and make learning fun. Our hologram system and AI-driven classifications offer a unique and hands-on approach to understanding exoplanets."
                image={aboutImage}
            />
            <Section
                title="Our Vision"
                text="Our vision is to inspire the next generation of explorers by making space science and exoplanet discoveries accessible and exciting. We aim to foster curiosity, encourage learning, and provide innovative tools that bring the wonders of the universe closer to students everywhere."
                image={visionImage}
                reverse={true}
            />
            <Section
                title="Our Mission"
                text="Our mission is to create an engaging and interactive platform that simplifies the complexities of exoplanet exploration. Through innovative technologies like AI, 3D visualizations, and holograms, we aim to make learning about the universe fun, accessible, and inspiring for students of all ages."
                image={missionImage}
            />
        </div>
    );
};

const styles = {
    container: {
        padding: '50px 0',
        backgroundColor: 'black',
        fontFamily: 'Arial, sans-serif',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // This makes the background image fixed during scrolling
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
