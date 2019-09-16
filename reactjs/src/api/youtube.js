import axios from "axios";

export const KEY = 'AIzaSyCKfILu3AbAhbIxzwz5BNg5HxLoIDvn8B0';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
})