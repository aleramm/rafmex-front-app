import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
import { getStorage } from './localStorage';

const storageState = getStorage();

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    storageState, 
    compose(
        applyMiddleware(...middleware)
    )
);

/*
store.subscribe(() => {
    savePlatform({
        platform : store.getState().device
    })
})
*/

export default store;