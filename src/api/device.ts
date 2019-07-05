import axios from 'axios';

export const getDeviceInfo = (params: object = {}) => {
    return axios.get('/api/device/getlist', {
        ...params,
        loading: true
    });
};

export default {
    getDeviceInfo
};
