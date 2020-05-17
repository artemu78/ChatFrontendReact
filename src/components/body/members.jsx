import React from 'react';
import withStyles from 'react-jss';
import SearchMember from './searchmember';
import compose from 'recompose/compose';
import ListMembers from './listmembers'
import { connect } from "react-redux";

const styles = {
    container: {
        borderLeft: '1px solid lightgrey',
        flexGrow: 0.3
    }
}

class Members extends React.Component {
    render() {
        const {classes} = this.props
        return <div className={classes.container}>
            <SearchMember />
            <ListMembers />
        </div>
    }
}

const mapStateToProps = state => {
    const { messages } = state;
    return { messages };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, null)
)(Members);