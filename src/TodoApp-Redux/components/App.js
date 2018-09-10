import React from "react";
import VisibleTodoList from '../containers/VisibleTodoList'
import TodoAdd from "../containers/TodoAdd.js"
import Footer from './Footer'
import { Grid } from "@material-ui/core"

const App = () =>
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
    >
        <div>
            <h3>TODO</h3>
            <TodoAdd />
            <VisibleTodoList />
            <Footer />
        </div>
    </Grid>
export default App
