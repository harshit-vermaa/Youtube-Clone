import axios from "axios";

const BaseURL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BaseURL,
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': '73b727ceaemsh00822fa2e8fbb19p15333ejsn40fd45e53691',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const FetchAPI = async (url) => {
    const { data } = await axios.get(`${BaseURL}/${url}`, options);

    return data;
}