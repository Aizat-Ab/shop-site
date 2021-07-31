import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools  } from 'redux-devtools-extension';

import cart from './reduce/cart';


const allReaducers = combineReducers({
    cart
})
const store = createStore(allReaducers,composeWithDevTools(applyMiddleware(thunk)));

export default store;