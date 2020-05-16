import React from "react";
import withStyles from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from '../search_style.js';

class SearchMember extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.searchPair}>
          <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
          <input type="text" className={classes.searchInput} placeholder='Поиск участника'/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchMember);
