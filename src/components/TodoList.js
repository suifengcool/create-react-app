import React from 'react';
import { connect } from 'react-redux';

let TodoList = ({ todo, dispatch }) => {
	console.log('todo:',todo)
    return(
	    <ul>
		    {
			    todo.map((item,index) => {
			    	return (
			    		<li key={index}>
							{item.text}
				    	</li>
			    	)
			    })
			}
	    </ul>
	)
}

const mapStateToProps = (state, ownProps) => {
    return {todo: state.todo};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {dispatch};
};

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoList;
