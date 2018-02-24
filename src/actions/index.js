import {ADD_TODO, TOGGLE_TODO, FILTER_TODO} from './action-types.js'
let nextTodoId = 0
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const filterTodo = (status) => ({
    type: FILTER_TODO,
    status
})