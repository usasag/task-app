import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    dispatch: React.Dispatch<any>;
}

const TodoList = ({todos, dispatch}: Props) => {

    return (
        <div className='todos'>
            {todos?.map(todo => (
            <SingleTodo 
            todo={todo} 
            key={todo.id} 
            doneTodos={() => dispatch({ type: "doneTodos", payload: todo.id })} 
            removeTodos={() => dispatch({ type: "removeTodos", payload: todo.id })}
            dispatch={dispatch}
            />
            ))}
        </div>
        )
    }

export default TodoList