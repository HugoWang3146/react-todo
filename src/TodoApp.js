import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Button, Input, Grid, InputLabel, List, ListItem, ListItemText, Divider, Checkbox } from "@material-ui/core";


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], visiablity: "all" };
    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.handleTodoItemToogle = this.handleTodoItemToogle.bind(this);
    this.handlevisiablity = this.handlevisiablity.bind(this);
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <div>
          <h3>TODO</h3>
          <TodoAdd length={this.state.items.length} handleTodoAdd={this.handleTodoAdd} />
          <Divider />
          <TodoList visiablity={this.state.visiablity} items={this.state.items} handleTodoItemToogle={this.handleTodoItemToogle} />
          <Divider />
          <VisiablityFilter handlevisiablity={this.handlevisiablity} />
        </div>
      </Grid>
    );
  }

  handleTodoAdd(newItem) {
    this.setState((state) => ({
      items: state.items.concat(newItem),
    }));
  }

  handleTodoItemToogle(index) {
    let items = [...this.state.items];
    let item = Object.assign({}, items[index]);
    item.isCompleted = !item.isCompleted;
    items[index] = item;
    this.setState({ items });
  }

  handlevisiablity(visiablity) {
    this.setState({ visiablity })
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <List>
        {this.props.items
          .filter(item => {
            switch (this.props.visiablity) {
              case "active":
                return item.isCompleted == false;
              case "completed":
                return item.isCompleted == true;
              default:
                return true;
            }
          })
          .map((item, index) => (
            <ListItem key={item.id} index={index} onClick={() => this.handleClick(index)} >
              <Checkbox
                checked={item.isCompleted == true}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={item.isCompleted == true ? item.text + '(Done)' : item.text} />
            </ListItem>
          ))}
      </List>
    );
  }

  handleClick(index) {
    this.props.handleTodoItemToogle(index);
  }
}

class TodoAdd extends Component {

  constructor(props) {
    super(props);
    this.state = { length: props.length, text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <InputLabel htmlFor="new-todo">
            What needs to be done?
          </InputLabel>
        </div>
        <div>
          <Input
            id="new-todo"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Add #{this.state.length + 1}
          </Button>
        </div>
      </form>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      isCompleted: false,
      text: this.state.text,
      id: Date.now()
    };
    this.props.handleTodoAdd(newItem);
  }

}

class VisiablityFilter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={(e) => this.handleClick("all")} >All</Button>
        <Button variant="contained" color="primary" onClick={(e) => this.handleClick("active")} >Active</Button>
        <Button variant="contained" color="primary" onClick={(e) => this.handleClick("completed")} >Completed</Button>
      </div>
    )
  }

  handleClick(visiablity) {
    this.props.handlevisiablity(visiablity);
  }
}

export default hot(module)(TodoApp);

