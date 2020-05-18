import types from 'redux/actionTypes'

const addMessage = (message) => ({ type: types.ADD_MESSAGE, payload: message });
const addMessageServer = (message_string) => ({ type: types.ADD_MESSAGE_SERVER, payload: message_string });

export default {addMessage, addMessageServer};