import axios from "axios";

export const getData = (query) => {
    console.log(query);
    if (query === "videos") {
        return axios.get(`https://api.pexels.com/videos/search?query=nature&per_page=15`, { headers: { Authorization: "563492ad6f91700001000001193709f84c9b4b1baef063a7366b16c4" } })
    } else {
        return axios.get(`https://api.pexels.com/v1/search?query=${query}`, { headers: { Authorization: "563492ad6f91700001000001193709f84c9b4b1baef063a7366b16c4" } })
    }
};