import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUESTED':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, customers: action.payload };
        case 'FETCH_FAILED':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
const store = legacy_createStore(reducer,(applyMiddleware(thunk)));

store.subscribe(() => { 
    console.log('present store state', store.getState());
})

export default store;