import React from "react";
import { connect } from "react-redux";
import style from "./style.module.scss";

function formatDatetime(d) {
  const current = new Date();
  const date =
    ("0" + d.getDate()).slice(-2) +
    "/" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "/" +
    d.getFullYear();
  const time =
    ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  if (
    current.getDay() === d.getDay() &&
    current.getMonth() === d.getMonth() &&
    current.getFullYear() === d.getFullYear()
  )
    return time;
  return `${date} ${time}`;
}

function ChatMessage({ message }) {
  if (!message) return null;

  const date = new Date(message.date);
  const datetime = formatDatetime(date);
  return (
    <div className={style.chat_message}>
      {message.message}
      <div className={style.details}>
        <span className={style.message_author}>
          {message.author && message.author.name}
        </span>{" "}
        <span className={style.message_date}>{datetime}</span>
      </div>
    </div>
  );
}

function Chatlist({ messages }) {
  return (
    <div className={style.chat_content}>
      <div className={style.chat_background} />
      <div>
        {messages.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { messages } = state;
  return { messages };
}
export default connect(mapStateToProps)(Chatlist);
