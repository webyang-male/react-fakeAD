import axios from 'axios';
import { ExpiredPlanReq } from './types';

const searchPromotionApi = {
    featchExpiredPlan: (params?: ExpiredPlanReq) => axios.get('/ad/plan/expired'),
    featchChartData: (params?: ExpiredPlanReq) => axios.get('/ad/plan/chart'),
};

export default searchPromotionApi;
