export const ADD_MESSAGE = "ADD_MESSAGE";

export const addmessages = (username , body) => ({
    type: ADD_MESSAGE,
    message: {username , body}
})