import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';
// const initialState = {
// 	loginReducer: {
// 		login: '',
// 		password: ''
// 	}
// };

// const store = createStore(reducer);
 //const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;