import React from 'react';
import withStyles from 'react-jss';
import SearchMember from './searchmember';

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
        </div>
    }
}

export default withStyles(styles)(Members);