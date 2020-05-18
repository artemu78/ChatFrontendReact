import types from "./actionTypes.js";

const initialState = {
  members: [
    {
      name: "Brian Adams",
      id: 1,
      avatar: "http://smartoboto.com/img/bots_logo/podcast-tim-robbins.jpg",
    },
    {
      name: "Billy Ilish",
      id: 2,
      avatar: "https://smartoboto.com/img/bots_logo/1588415943.jpeg",
    },
    {
      name: "Stormy Daniels",
      id: 3,
      avatar: "https://smartoboto.com/img/bots_logo/logo_santa.png",
    },
    {
      name: "James Cook",
      avatar: "https://smartoboto.com/img/bots_logo/logo_smart.png",
      id: 434,
    },
  ],
  messages: [],
  filter_author_id: null,
  author: {
    name: "James Cook",
    avatar: "https://smartoboto.com/img/bots_logo/logo_smart.png",
    id: 434,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_MESSAGE_SERVER:
      const {id, author_id, message, date} = action.payload;
      const message_obj = {
        message,
        id,
        author: state.members.find(member => member.id === author_id),
        date
      }
      state.messages.push(message_obj);
      return { 
        ...state,
        messages: state.messages.slice(-100)
      }
    case types.ADD_MESSAGE:
      const message_string = action.payload;
      const obj = {
        id: Math.floor(Math.random() * 10000000),
        message: message_string,
        author: Object.assign({}, state.author),
        date: new Date().toISOString(),
      };
      state.messages.push(obj);
      return {
        ...state,
        messages: state.messages.slice(-100),
      };
    case types.FILTER_AUTHOR:
      return { 
        ...state,
        filter_author_id: action.payload
      }
    default:
      return state;
  }
}