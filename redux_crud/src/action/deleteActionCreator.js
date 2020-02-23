export const DELETE_STUDENT = 'DELETE_STUDENT';


export function deleteActionCreator(id, name) {

    return {
        type: DELETE_STUDENT,
        id,
        name
    }
}
