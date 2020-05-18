import React from "react";
import { connect } from "react-redux";
import style from "./style.module.scss";

const messages = {
  chat_name: "Чат волчат",
  chat_members: "Участников",
};

class Header extends React.Component {
  render() {
    const { members, author } = this.props;
    return (
      <div className={style.container}>
        <div>
          <div className={style.name}>{messages.chat_name}</div>
          <div className={style.details}>
            {messages.chat_members}: {members.length}
          </div>
        </div>
        <div className={style.author}>
          <div>
            <img src={author.avatar} width="50" height="50" alt="" />
          </div>
          <div>{author.name}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { members, author } = state;
  return { members, author };
}
export default connect(mapStateToProps)(Header);
