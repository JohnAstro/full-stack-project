import axios from 'axios';

export default axios.create({
    baseURL: 'https://6e5f-76-85-22-73.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});