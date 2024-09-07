// services/apiService.js

// const API_URL = 'http://localhost:3000/wpp';
const API_URL = 'https://13.49.74.201:3000/wpp';

export const sendMessage = async (phoneNumber, message) => {
    alert(JSON.stringify({
        remoteId: `55${phoneNumber.replace(/\D/g, '')}@c.us`,
        message,
    }))
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                remoteId: `55${phoneNumber.replace(/\D/g, '')}@c.us`,
                message,
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
