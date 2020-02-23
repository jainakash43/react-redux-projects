import { student_st } from '../store/student_store.js';
import { combineReducers } from 'redux';
import { ADD_STUDENT } from '../action/addActionCreator.js';
import { EDIT_STUDENT } from '../action/editActionCreator.js';
import { DELETE_STUDENT } from '../action/deleteActionCreator.js';

 function student_reducer(state = student_st, action) {

    switch (action.type) {

        case ADD_STUDENT:
            {
                let student= [...state, { id:action.id, name:action.name }];
                return student;
            }
        case EDIT_STUDENT:
            {
                let student = [...state];
                let student_Index = state.findIndex(c => c.id === action.id);
                student[student_Index] = { id: action.id, name:action.name };
               
                return student;

            }
        case DELETE_STUDENT:
            {

                let student = [...state];
                student = student.filter(c => c.id != action.id);
                return student;

            }



        default:
            return state;

    }
}
const rootReducer = combineReducers({ student_reducer });

export default rootReducer;