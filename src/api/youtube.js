import axios from "axios";

export const KEY = '';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
})
