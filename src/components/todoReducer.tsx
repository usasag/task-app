import { Todo } from './model';

export type Actions = 
   | {type: "addTodo"; payload: string}
   | {type: "removeTodos"; payload: number}
   | {type: "doneTodos"; payload: number}
   | {type: "editTodos"; payload: { id: number, newTodo: string }}
   | {type: "setTodos"; payload: Todo[]}
   | {type: "setCompletedTodos"; payload: Todo[]}

   export const todoReducer = (state: Todo[], action: Actions) => {
        switch (action.type) {
            case "addTodo":
                return [...state, { id: Date.now(), todo: action.payload, isDone: false }];
            case "removeTodos":
                return state.filter((todo) => todo.id !== action.payload);
            case "doneTodos":
                return state.map((todo) => 
                action.payload === todo.id ? { ...todo, isDone: !todo.isDone } : todo
              );
            case "editTodos":
                return state.map((todo) =>
                action.payload.id === todo.id ? { ...todo, todo: action.payload.newTodo } : todo
            );
            case "setTodos":
                return action.payload;
            case "setCompletedTodos":
                return action.payload;

                default:
                    return state;
            }
    };

    

export default todoReducer