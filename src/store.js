import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
import { getStorage, saveStateStorage } from './localStorage';

const storageState = getStorage();

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    storageState, 
    compose(
        applyMiddleware(...middleware)
    )
);

store.subscribe(() => {
    saveStateStorage({
        login_info : store.getState().login
    })
})

export default store;