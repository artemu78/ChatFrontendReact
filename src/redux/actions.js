import types from 'redux/actionTypes'

const addMessage = (message) => ({ type: types.ADD_MESSAGE, payload: message });
const addMessageServer = (message_string) => ({ type: types.ADD_MESSAGE_SERVER, payload: message_string });
const filterAuthor = (author_id) => ({ type: types.FILTER_AUTHOR, payload: author_id });

export default {addMessage, addMessageServer, filterAuthor};