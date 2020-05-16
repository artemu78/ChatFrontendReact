import React from "react";
import styles from "../search_style.js";
import withStyles from "react-jss";
const messages = {
  typemessage: "Введите сообщение",
};
class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.searchPair}>
          <input
            type="text"
            className={classes.searchInput}
            placeholder={messages.typemessage}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
