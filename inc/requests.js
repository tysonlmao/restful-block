const axios = require('axios');
// import axios from 'axios';

const getEndpointData = async (endpoint) => {
    try {
        console.log("Contacting the API");
        const res = await axios.get(endpoint);
        return res.data;
    } catch {
        console.error(error);
    }
};

export default getEndpointData;
