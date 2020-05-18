import React from 'react';
import withStyles from 'react-jss';
import SearchMember from './searchmember';
import compose from 'recompose/compose';
import ListMembers from './listmembers'
import { connect } from "react-redux";

const styles = {
    container: {
        borderLeft: '1px solid lightgrey',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '25%',
        overflowY: 'auto'
    }
}

class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: props.members,
            filteredMembers: Array.from(props.members)
        }
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(value) {
        const { members } = this.state;
        const re = new RegExp(value, 'gi');
        const filteredMembers = members.filter(member => member.name && member.name.match(re));
        this.setState({filteredMembers});
    }

    render() {
        const {classes} = this.props;
        const {filteredMembers} = this.state;
        return <div className={classes.container}>
            <SearchMember onSearch={this.onSearch}/>
            <ListMembers members={filteredMembers}/>
        </div>
    }
}

const mapStateToProps = state => {
    const { members } = state;
    return { members };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, null)
)(Members);