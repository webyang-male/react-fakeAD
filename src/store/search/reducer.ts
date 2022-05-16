import { cloneDeep } from 'lodash';

const searchInitState = {
    account: {},
};

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

export default search;
