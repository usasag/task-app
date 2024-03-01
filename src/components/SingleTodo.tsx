import React, { useRef, useEffect } from 'react'
import { Todo } from '../model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import "./styles.css";
import { Actions } from './todoReducer';



type Props = {
    todo: Todo;
    doneTodos: () => void;
    removeTodos: () => void;
    dispatch: React.Dispatch<Actions>;
}

const SingleTodo = ({ todo, doneTodos, removeTodos, dispatch }: Props) => {

const inputRef = useRef<HTMLInputElement>(null)

const [edit, setEdit] = React.useState<boolean>(false);
const [editTodo, setEditTodo] = React.useState<string>(todo.todo); 

useEffect(() => {
        inputRef.current?.focus();
  }, [edit])
  
const editTodos = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "editTodos", payload: { id: todo.id, newTodo: editTodo } });
        setEdit(false);
    }

  return (
    <div>
        <form action="" className='todos__single' onSubmit={editTodos}>

            {edit ? (
                <input
                    ref={inputRef}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todos__single--text"
                />
            ) : todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>
            ) : (
                <span className="todos__single--text">{todo.todo}</span>
            )
            }
            <div>
                <span className='icon' onClick={() => {
                    if(!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }
            }>
                    <AiFillEdit />
                </span>
                <span className='icon' onClick={removeTodos}>
                    <AiFillDelete />
                </span>
                <span className='icon' onClick={doneTodos}>
                    <MdDone />
                </span>
            </div>
        </form>
    </div>
  )
}

export default SingleTodo