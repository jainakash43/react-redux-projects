export const ADD_STUDENT = 'ADD_STUDENT';


export  function addActionCreator(id, name) {

    return {
        type: ADD_STUDENT,
        id,
        name
    }
}
