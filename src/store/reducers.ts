import { combineReducers } from 'redux';
import { cloneDeep } from 'lodash';

const indexInitSate = {
    userBalanceInfo: {
        balance: 0,
    },
};

const searchInitState = {
    account: {},
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

function search(state = searchInitState, action: any) {
    const newState = cloneDeep(state);
    switch (action.type) {
    case 'updateUserAccount':
        // console.log('aciton', action);
        newState.account = action.user;
        return newState;
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    index,
    search,
});

export default rootReducer;
