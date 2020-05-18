import React from 'react';
import Member from './member';

class ListMembers extends React.Component {
    render() {
        const { members } = this.props;
        return <div>
            {members.map(member => <Member member={member} key={member.id}/> )}
        </div>
    }
}

export default ListMembers;