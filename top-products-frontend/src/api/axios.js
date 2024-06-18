import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', // Replace with your backend server's URL
});

export default axiosInstance;
