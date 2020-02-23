export const EDIT_STUDENT = 'EDIT_STUDENT';

export function editActionCreator(id, name) {

    return {

        type: EDIT_STUDENT,
        id,
        name
    }

}