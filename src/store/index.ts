import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
// import rootReducer from './reducer';
// import rootSaga from './saga';

let allReducers: any = {};
const allSagas: any = [];

function importAll(r: any, moudleType: string) {
    r.keys().forEach((item: any) => {
        if (moudleType === 'reducer') {
            const name = item.split('/')[1];
            const reducerItem = { [name]: r(item).default };
            allReducers = { ...allReducers, ...reducerItem };
        } else if (moudleType === 'saga') {
            allSagas.push(...r(item).default);
        } else {
            //
        }
    });
}
// @ts-ignore
importAll(require.context('./', true, /reducer\.ts$/), 'reducer');
// @ts-ignore
importAll(require.context('./', true, /saga\.ts$/), 'saga');

const rootReducer = combineReducers(allReducers);

const rootSaga = function* () {
    yield all(allSagas);
};

const sagaMiddleware = createSagaMiddleware();

const store: any = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
