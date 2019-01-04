import axios from 'axios';
import KEY from '../key/key';

const AUTH = 'Client-ID ' + KEY;

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: AUTH,
    }
});