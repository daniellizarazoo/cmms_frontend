import axios from 'axios';

const baseUrl = 'https://cmms-backend-g8ek.onrender.com/users/login';

// Define and export the healthCheck function with a body
export const logIn = async (payload) => {
    try{
        const response = await axios.post(baseUrl, payload);
        return response.data;
    } catch (error){
        return {error: error.response.data.error,status:error.response.status};
    }
};
