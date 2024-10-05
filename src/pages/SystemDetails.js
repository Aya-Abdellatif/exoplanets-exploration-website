import React from 'react';
import { useSelector } from 'react-redux';
import { useGenerateImageFromTextMutation } from '../state/api/models-lab';
import { generateStableDiffusionPrompt } from '../utils/transformers';

// Styling object using JavaScript
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    },
    hostInfo: {
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
        color: '#555',
    },
    planetList: {
        listStyleType: 'none',
        padding: '0',
    },
    planetItem: {
        backgroundColor: '#e0e0e0',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '10px',
        textAlign: 'left',
    },
    planetTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    planetDescription: {
        fontSize: '14px',
        color: '#333',
    },
    imageContainer: {
        marginTop: '20px',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px',
    },
    loading: {
        fontSize: '18px',
        color: '#333',
    }
};

const SystemDetails = () => {
    const systemData = useSelector((state) => state.host.selectedHost);
    const { hostname, star, planets } = systemData;
    const [generateImage, { isLoading, data }] = useGenerateImageFromTextMutation();
    const handleGenerateImage = async () => {
        if (systemData) {
            const prompt = generateStableDiffusionPrompt(systemData)
            await generateImage({
                prompt
            });
        }
    };

    return (
        <div style={styles.container}>
            {/* Button to generate the image */}
            <button style={styles.button} onClick={handleGenerateImage} disabled={isLoading}>
                {isLoading ? 'Generating Image...' : 'Generate Image'}
            </button>

            {data && (
                <div style={styles.imageContainer}>
                    {data.output.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`Generated ${index}`} style={styles.image} />
                    ))}
                </div>
            )}
            {/* Host Information */}
            <div style={styles.hostInfo}>
                <h1 style={styles.title}>{hostname}</h1>
                <p style={styles.description}>
                    <strong>Star Details:</strong> <br />
                    Effective Temperature: {star.st_teff} K <br />
                    Radius: {star.st_rad} Solar Radii <br />
                    Mass: {star.st_mass} Solar Masses <br />
                    Distance: {star.sy_dist} light years <br />
                    Visible Magnitude: {star.sy_vmag} <br />
                    Coordinates (RA/Dec): {star.rastr}, {star.decstr}
                </p>
            </div>

            {/* Planets List */}
            <h2 style={styles.title}>Planets</h2>
            <ul style={styles.planetList}>
                {planets.map((planet, index) => (
                    <li key={index} style={styles.planetItem}>
                        <h3 style={styles.planetTitle}>{planet.pl_name}</h3>
                        <p style={styles.planetDescription}>
                            <strong>Discovery Method:</strong> {planet.discoverymethod} <br />
                            <strong>Discovery Year:</strong> {planet.disc_year} <br />
                            <strong>Discovery Facility:</strong> {planet.disc_facility} <br />
                            <strong>Orbital Period:</strong> {planet.pl_orbper} days <br />
                            <strong>Mass:</strong> {planet.pl_bmasse} Earth Masses <br />
                            <strong>Eccentricity:</strong> {planet.pl_orbeccen}
                        </p>
                    </li>
                ))}
            </ul>


        </div>
    );
};

export default SystemDetails;
