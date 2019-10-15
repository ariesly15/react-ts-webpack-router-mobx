// https://github.com/axios/axios
import axios from 'axios';

export default {
    testPost(params: object = {}) {
        return axios.post('/api/test', params, { loading: true });
    },
    getjson() {
        return axios.get('/api/json');
    },
    testCookie() {
        return axios.get('/api/test/cookie');
    },
    testup(url, data) {
        return axios.post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    testCORS() {
        return axios.get('http://127.0.0.1:7001/test');
    },
    testdown() {
        return axios.get('/api/case/down?caseId=37');
    }
};
