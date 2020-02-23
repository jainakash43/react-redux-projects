import characters_json from '../data/characters_json.json';
import { ADD_CHARACTER } from '../action'
import  characters_reducer  from './characters_reducer';
import  heroes_reducer  from './heroes_reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
     characters_reducer,heroes_reducer
})
export default rootReducer;