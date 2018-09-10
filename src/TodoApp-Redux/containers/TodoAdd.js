import { Input, InputLabel, Button } from "@material-ui/core";
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


const TodoAdd = ({ dispatch }) => {
    let input

    return (<form onSubmit={e => {
        e.preventDefault()
        if (!input.trim()) {
            return
        }
        dispatch(addTodo(input))
        input = ''
    }}>
        <div>
            <InputLabel htmlFor="new-todo">
                What needs to be done?
          </InputLabel>
        </div>
        <div>
            <Input
                id="new-todo"
                value={input}
                onChange={(e) => {
                    input = e.target.value;
                }}
            />
            <Button variant="contained" color="primary" type="submit">
                Add
            </Button>
        </div>
    </form>);
}

export default connect()(TodoAdd);