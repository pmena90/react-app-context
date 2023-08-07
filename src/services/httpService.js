// services/httpService.js
import axios from 'axios';

const API_BASE_URL = 'https://api.github.com/';

const httpService = axios.create({
    baseURL: API_BASE_URL,
});

export default httpService;