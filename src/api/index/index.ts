import axios from 'axios';

const indexApi = {
    getUserBalance: () => axios.get('ad/user/balance'),
};

export default indexApi;
