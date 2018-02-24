import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo'
import TodoList from '../components/TodoList'
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
				<p className="App-intro">
				    A simple demo named todoList.
				</p>
				<div className="todoContain">
					<AddTodo />
					<TodoList />
				</div>
		    </div>
		);
    }
}

export default App;
