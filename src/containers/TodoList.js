import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions'

let TodoList = ({ todo, filter, dispatch }) => {

	const toggle = (item) => {
		dispatch(toggleTodo(item.id))
	}

	let todoData = []

	switch (filter) {
		case 'Active':
			todoData = todo.filter(item=>!item.completed)
			break;
		case 'Completed':
			todoData = todo.filter(item=>item.completed)
			break;
		default:
			todoData = todo
			break;
	}
    return(
	    <ul>
		    {
			    todoData.map((item,i) => {
			    	return (
			    		<li 
			    			key={i} 
			    			onClick={()=>toggle(item)} 
			    			style={{textDecoration: item.completed ? 'line-through' : 'none'}}
		    			>{item.text}</li>
			    	)
			    })
			}
	    </ul>
	)
}

const mapStateToProps = (state, ownProps) => {
    return {
    	todo: state.todo,
    	filter: state.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {dispatch};
};

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoList;
