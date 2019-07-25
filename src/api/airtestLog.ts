import axios from "axios";

export const getLogs = (params: object = {}) => {
    return axios.get('/api/logs', {
        ...params,
        loading: true
    });
};

export default {
    getLogs
};
