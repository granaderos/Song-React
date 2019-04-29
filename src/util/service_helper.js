import axios from "axios";

import {
    getSongsURL,
    getGenresURL,
    getArtistsURL,
    getLabelsURL
} from "./service_util";

const getSongs = () => {
    return axios.get(getSongsURL);
}

const getGenres = () => {
    return axios.get(getGenresURL);
}

const getArtists = () => {
    return axios.get(getArtistsURL);
}

const getLabels = () => {
    return axios.get(getLabelsURL);
}

export {
    getSongs,
    getGenres,
    getArtists,
    getLabels,
}