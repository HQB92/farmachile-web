import axios from 'axios';

const API_URL = 'https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php';

export const fetchFarmacias = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching farmacias:', error);
        throw error;
    }
};
