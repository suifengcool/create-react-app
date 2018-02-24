import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ state, dispatch }) => {
    let input

    const onSubmitHandle = (e) => {
        e.preventDefault()
        if(!input.value.trim()) return
        dispatch(addTodo(input.value))
        input.value = ''
    }

    return (
        <div>
            <form onSubmit={ (e) => onSubmitHandle(e)}>
                <input ref={node => {input = node}} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {state: state};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {dispatch};
};

AddTodo = connect(mapStateToProps,mapDispatchToProps)(AddTodo)

export default AddTodo