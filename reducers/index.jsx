import {combineReducers} from 'redux'

import form from './form.jsx'
import results from './results.jsx';

const x = combineReducers({
  form,
  results
})

export default x;