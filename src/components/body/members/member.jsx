import React from 'react';
import style from "../style.module.scss";
import { connect } from "react-redux";
import actions from "redux/actions";
import classNames from 'classnames';

class Member extends React.Component {
    render() {
        const { member, filterAuthor, filter_author_id} = this.props;
        const new_author = member.id === filter_author_id ? null : member.id;
        const className = classNames(style.chat_message, style.pointer, 
          (member.id === filter_author_id) ? style.chat_message_selected : null);
        return (<div className={className} onClick={() => filterAuthor(new_author)}>
        <div>
          <img src={member.avatar} width="50" height="50" alt="" />
        </div>
        <div>
          {member.name}
        </div>
      </div>)
    }
}

function mapStateToProps(state) {
  return {filter_author_id: state.filter_author_id}
}

export default connect(mapStateToProps, {filterAuthor: actions.filterAuthor})(Member);