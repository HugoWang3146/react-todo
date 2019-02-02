import React from "react";
import App from "./TodoApp-Redux/components/App"
import rootReducer from './TodoApp-Redux/reducers'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

/* This is a version of todoApp without redux" */
// import ReactDOM from "react-dom";
// import TodoApp from "./TodoApp/TodoApp.js"
// ReactDOM.render(
//   <TodoApp />,
//   document.getElementById("todo")
// );

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('todo-redux')
)