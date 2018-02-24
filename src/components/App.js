import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import Select from '../containers/Select'
import logo from '../assets/logo.svg';
import './App.sass';

class App extends Component {
    render() {
		return (
		    <div className="App">
				<header className="App-header">
				    <img src={logo} className="App-logo" alt="logo" />
				    <h1 className="App-title">Welcome to React</h1>
				</header>
				<h3 className="App-intro">
				    todoList
				</h3>
				<div className="todoContain">
					<AddTodo />
					<TodoList />
					<Select />
				</div>
		    </div>
		);
    }
}

export default App;
