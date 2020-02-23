import characters_json from '../data/characters_json.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../action';
import { createCharacter } from './helper.js';

function characters_reducer(state = characters_json, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            {
                let characters = state.filter(item => item.id !== action.id);
                return characters;
            }

        case REMOVE_CHARACTER:
            {
                let characters = [...state, createCharacter(action.id)];
                return characters;
            }

        default:
            return state;
    }
}


export default characters_reducer;