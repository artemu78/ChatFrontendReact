import React from 'react';
import style from "../style.module.scss";

class Member extends React.Component {
    render() {
        const { member } = this.props;
        return (<div className={style.chat_message}>
        <div>
          <img src={member.avatar} width="50" height="50" alt="" />
        </div>
        <div>
          {member.name}
        </div>
      </div>)
    }
}

export default Member;