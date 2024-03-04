import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
}

const TodosList = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
  return (
    <div className="container">
    <Droppable droppableId="TodosList">
        {
            (provided, snapshot) => (
                <div
                    className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <span className="todos__heading">
                        Active Tasks
                    </span>

                    {todos?.map((todo, index) => (
                        <SingleTodo
                            todos={todos}
                            todo={todo}
                            index={index}
                            key={todo.id}
                            setTodos={setTodos}
                        />
                    ))}
                    {provided.placeholder}
                </div>
            )
        }
    </Droppable>
    <Droppable droppableId="TodosRemove">
    {
        (provided, snapshot) => (
            <div
                className={`todos ${snapshot.isDraggingOver ? "dragcomplete" : "remove"}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
            >
                <span className="todos__heading">
                    Completed Tasks
                </span>
                {completedTodos?.map((todo, index) => (
                    <SingleTodo
                        todos={completedTodos}
                        todo={todo}
                        index={index}
                        key={todo.id}
                        setTodos={setCompletedTodos}
                    />
                ))}
                {provided.placeholder}
            </div>
        )
    }
</Droppable>
    </div>
  );
};

export default TodosList;