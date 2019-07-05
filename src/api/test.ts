// https://github.com/axios/axios
import axios from 'axios';

export default {
    testPost(params: object = {}) {
        return axios.post('/api/test', params, { loading: true });
    }
};
