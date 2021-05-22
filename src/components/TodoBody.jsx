import React, {useState, useEffect} from 'react';
import TodoList from "./TodoList";
import TodoCreateBtn from "./TodoCreateBtn";

const TodoBody = (props) => {
    return (
        <div>
            <p>{props.test}</p>
            <p><TodoList /></p>
            <p><TodoCreateBtn /></p>
        </div>
    )
};

export default TodoBody;