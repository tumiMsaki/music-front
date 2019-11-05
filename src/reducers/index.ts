import { combineReducers } from 'redux';
import add from './number'
import input from './input'

const Reducer = combineReducers({
  add,
  input
})

export default Reducer

