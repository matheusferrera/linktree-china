// services/apiService.js

import axios from 'axios';

// const API_URL = 'http://localhost:3000/wpp';
const API_URL = 'https://13.49.74.201:3000/wpp';

export const sendMessage = async (phoneNumber, message) => {
    const data = {
        remoteId: `55${phoneNumber.replace(/\D/g, '')}@c.us`,
        message,
    };

    alert(JSON.stringify(data));

    try {
        const response = await axios.post(API_URL, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
