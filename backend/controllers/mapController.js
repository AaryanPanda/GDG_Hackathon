import axios from 'axios';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const mapController = async (req, res) => {
    const { lat, lng } = req.query;

    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=waste&location=${lat}%2C${lng}&radius=5500&type=waste_managementx&key=${GOOGLE_MAPS_API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch nearby places' });
    }
};

export default mapController;
