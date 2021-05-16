import React from 'react';
import TodoHeader from "./components/TodoHeader";
import TodoBody from "./components/TodoBody";

const Todo = () =>{

    return(
        <>
            < TodoHeader
                title = {'React-Todo'}
            />

            < TodoBody />

        </>
    );
}

export default Todo;