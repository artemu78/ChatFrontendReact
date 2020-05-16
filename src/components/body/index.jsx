import React from 'react';
import style from './style.module.scss';
import Members from './members';
import ChatList from './chatlist.jsx';

function Body(props) {
    return (
    <div className={style.body}>
        <ChatList />
        <Members />
    </div>
)
}

export default Body;