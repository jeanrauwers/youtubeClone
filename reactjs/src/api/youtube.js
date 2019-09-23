import axios from "axios";

export const KEY = 'add your api key here';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
})
