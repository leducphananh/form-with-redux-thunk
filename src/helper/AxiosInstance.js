const { default: axios } = require("axios");

const AxiosInstance = () => {
    const { REACT_APP_API_URL } = process.env;

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000/users',
        responseType: 'json',
    })

    return axiosInstance;
}

export default AxiosInstance;
