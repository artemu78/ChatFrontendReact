import React from "react";
import withStyles from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from '../../search_style.js';

const messages = {
  search_member: 'Поиск участника'
}

class SearchMember extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onSearch } = this.props;
    onSearch && onSearch(e.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.searchPair}>
          <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
          <input type="text" className={classes.searchInput} placeholder={messages.search_member} onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchMember);
