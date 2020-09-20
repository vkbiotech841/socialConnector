import axios from 'axios';
import { defaults } from 'request';

// Adding a global header

const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
}


export default setAuthToken;