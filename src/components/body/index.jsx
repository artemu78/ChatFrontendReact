import React from 'react';
import style from './style.module.scss';
function Body(props) {
    return (
    <div className={style.body}>
        <div className={style.chat_content}>здесь чат</div>
        <div>участники чата</div>
    </div>
)
}

export default Body;