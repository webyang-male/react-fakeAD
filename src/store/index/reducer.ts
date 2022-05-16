import { cloneDeep } from 'lodash';

const indexInitSate = {
    userBalanceInfo: {
        balance: 0,
    },
};

function index(state = indexInitSate, action: any) {
    const newState = cloneDeep(state);
    switch (action.type) {
    case 'updateUserBalanceInfo':
        newState.userBalanceInfo = action.userBalanceInfo;
        return newState;
    default:
        return state;
    }
}

export default index;
