import React, { useEffect } from 'react';
import './App.css';
import { connect } from "react-redux";
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import actions from 'redux/actions.js';
const MESSAGE_TYPES = {
  message: 'chat_message'
};
function App({addMessageServer}) {
  useEffect(() => {
    console.log('set websocket');
    const webSocket = new WebSocket('ws://localhost:8080');
    webSocket.onopen = function (event) {
      webSocket.send("Here's some text that the server is urgently awaiting!"); 
    };

    webSocket.onmessage = function (event) {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case MESSAGE_TYPES.message: 
          addMessageServer(data);
          break;
        default:
          console.error(event, 'unhandled server event');
          break;
      }
    }
  });
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default connect(null, {addMessageServer: actions.addMessageServer})(App);
