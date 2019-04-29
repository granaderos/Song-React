import { getUserListURL, getSongsURL } from "./service_util";
import axios from "axios";

const getUserList = () => {
    return axios.get(getUserListURL);
}

const getSongs = () => {
    return axios.get(getSongsURL);
}

export {
    getUserList,
    getSongs
}