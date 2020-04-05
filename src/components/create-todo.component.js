import React, { Component } from 'react';

import {
  TextField,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  Typography
} from '@material-ui/core';

import axios from 'axios';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: '',
      todo_assignee: '',
      todo_priority: '',
      todo_completed: false
    };
  }
  onChangeTodoDescription = e => {
    this.setState({
      todo_description: e.target.value
    });
  };

  onChangeTodoAssignee = e => {
    this.setState({
      todo_assignee: e.target.value
    });
  };

  onChangeTodoPriority = e => {
    this.setState({
      todo_priority: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_assignee: this.state.todo_assignee,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    };

    axios
      .post('http://localhost:4000/todos/add', newTodo)
      .then(res => console.log(res.data));

    this.setState({
      todo_description: '',
      todo_assignee: '',
      todo_priority: '',
      todo_completed: false
    });
  };
  render() {
    return (
      <form>
        <p>Welcome to Create Todo Component!!</p>

        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={this.onChangeTodoDescription}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Assignee"
          variant="outlined"
          onChange={this.onChangeTodoAssignee}
        />
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend">Priority</FormLabel>
          <RadioGroup
            aria-label="Priority"
            name="priority"
            value={this.state.todo_priority}
            onChange={this.onChangeTodoPriority}
          >
            <FormControlLabel value="Low" control={<Radio />} label="Low" />
            <FormControlLabel
              value="Medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="High" control={<Radio />} label="High" />
          </RadioGroup>
        </FormControl>
        <br />
        <Button onClick={this.onSubmit} variant="outlined" color="primary">
          Create todo
        </Button>
        <Typography variant="h2">{this.state.todo_priority} </Typography>
      </form>
    );
  }
}
