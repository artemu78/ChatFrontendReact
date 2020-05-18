import React, { useEffect } from "react";
import { connect } from "react-redux";
import style from "../style.module.scss";

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
      <div>
        <img src={message.author.avatar} width="50" height="50" alt="" />
      </div>
      <div>
        {message.message}
        <div className={style.details}>
          <span className={style.message_author}>
            {message.author && message.author.name}
          </span>{" "}
          <span className={style.message_date}>{datetime}</span>
        </div>
      </div>
    </div>
  );
}

const filterByAuthorId = (author_id) => (message) => {
  return (author_id && message.author.id === author_id) || !author_id;
};

function Chatlist({ messages, filter_author_id }) {
  const ref = React.createRef();
  const filterAuthor = filterByAuthorId(filter_author_id);
  useEffect(() => {
    ref.current.scrollTo(0, ref.current.scrollHeight);
  });
  return (
    <div className={style.chat_content} ref={ref}>
      <div>
        {messages.filter(filterAuthor).map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { messages, filter_author_id } = state;
  return { messages, filter_author_id };
}
export default connect(mapStateToProps)(Chatlist);
