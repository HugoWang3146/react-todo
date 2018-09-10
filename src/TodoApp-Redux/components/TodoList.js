import { List } from "@material-ui/core";
import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, toggleTodo }) =>
    <List>
        {
            todos.map(item =>
                <TodoItem key={item.id} {...item} onClick={() => toggleTodo(item.id)} />
            )
        }
    </List>


export default TodoList