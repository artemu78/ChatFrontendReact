import React from "react";
import styles from "../search_style.js";
import withStyles from "react-jss";
import compose from 'recompose/compose';
import { connect } from "react-redux";
import actions from 'redux/actions'

const messages = {
  typemessage: "Введите сообщение",
};
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(e) {
    this.setState({message: e.target.value});
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      const { addMessage } = this.props;
      addMessage && addMessage(this.state.message);
      this.setState({message: ''});
    }
  }

  render() {
    const { classes } = this.props;
    const { message } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.searchPair}>
          <input
            type="text"
            className={classes.searchInput}
            placeholder={messages.typemessage}
            value={message}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
          />
        </div>
      </div>
    );
  }
}

export default compose(
withStyles(styles),
connect(null, {addMessage: actions.addMessage})
)(Footer);
