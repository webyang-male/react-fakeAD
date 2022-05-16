import {
    observable, runInAction, makeObservable, action, computed,
} from 'mobx';
import searchPromotionApi from 'api/search';

class GlobalStore {
    constructor() {
        makeObservable(this);
    }

    @observable isKAAccount: boolean = true;

    // @observable modalShow: boolean = false;
    // @observable expiredPlanData = [];

    // @observable dataTrendData = [];

    // async getExpiredPlanList() {
    //     try {
    //         await searchPromotionApi.featchExpiredPlan().then((res: any) => {
    //             // const expiredPlanList = res.data.data;
    //             runInAction(() => {
    //                 // this.modalShow = expiredPlanList.length > 0;
    //                 this.expiredPlanData = res.data.data;
    //             });
    //         });
    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // }

    // @computed get modalShow() {
    //     return this.expiredPlanData.length > 0;
    // }

    // async getChartData() {
    //     try {
    //         await searchPromotionApi.featchChartData().then((res: any) => {
    //             runInAction(() => {
    //                 this.dataTrendData = res.data.data;
    //             });
    //         });
    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // }
}

export default new GlobalStore();
