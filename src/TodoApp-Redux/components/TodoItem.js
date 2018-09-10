import React from "react";
import { ListItem, ListItemText, Checkbox } from "@material-ui/core";

const TodoItem = ({ onClick, isCompleted, text }) =>
    <ListItem onClick={onClick} >
        <Checkbox
            checked={isCompleted == true}
            tabIndex={-1}
            disableRipple
        />
        <ListItemText primary={isCompleted == true ? text + '(Done)' : text} />
    </ListItem>



export default TodoItem
