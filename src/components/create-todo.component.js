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
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Assignee: ${this.state.todo_assignee}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

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
