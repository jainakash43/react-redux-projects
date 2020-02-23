import characters_json from '../data/characters_json.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../action';
import { createCharacter } from './helper.js';
function heroes_reducer(state = [], action)
{ 
switch (action.type) {
    case ADD_CHARACTER:
        {
            let heroes = [...state, createCharacter(action.id)];
            return heroes;
        }
    case REMOVE_CHARACTER:
        {
           let  heroes = state.filter(item => item.id !== action.id);
            return heroes;
        }
     default:
        return state;
}

}



export default heroes_reducer;

