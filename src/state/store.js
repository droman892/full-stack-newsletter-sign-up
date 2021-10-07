import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

// Consider incorporating redux-logger
// import logger from 'redux-logger';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;