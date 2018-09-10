import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.js";
// import TodoApp from "./TodoApp.js"
import App from "./TodoApp-Redux/components/App"
import rootReducer from './TodoApp-Redux/reducers'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

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