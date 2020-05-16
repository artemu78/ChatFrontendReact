import React from 'react';
import style from './style.module.scss';
import Members from './members';


function Body(props) {
    return (
    <div className={style.body}>
        <div className={style.chat_content}>здесь чат</div>
        <Members />
    </div>
)
}

export default Body;