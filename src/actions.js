import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id, text) { //ARGUMENT FUNKCJI TEXT JEST TU CHYBA NIEPOTRZEBNY???
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    }
}

export ADD_COMMENT;
export REMOVE_COMMENT;
export EDIT_COMMENT;
export THUMB_UP_COMMENT;
export THUMB_DOWN_COMMENT;

export {addComment}; // CZY POWINNO TO BYĆ W {}??? Powinno :)
export {removeComment};
export {editComment};
export {thumbUpComment};
export {thumbDownComment};