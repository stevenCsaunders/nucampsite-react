import * as ActionTypes from './ActionType';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        author: author,
        rating: rating,
        text: text,
    }
})