
import { createStore, combineReducers } from 'redux'
import CounterReducer from './CounterReducer'
import LoogedinReducer from './LoogedinReducer'

const allReducers = combineReducers({
    counter: CounterReducer,
    loggedin: LoogedinReducer 
})

const store = createStore(allReducers)


export default store