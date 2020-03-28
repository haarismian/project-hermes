import React from 'react';
import './App.css';

//libraries
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, AppBar, Toolbar } from '@material-ui/core';
//components
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button>
              <Link to="/" className="navbar-brand">
                MERN-Stack Todo App
              </Link>
            </Button>
            <Button>
              <Link to="/" className="nav-link">
                Todos
              </Link>
            </Button>
            <Button>
              <Link to="/create" className="nav-link">
                Create Todo
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
