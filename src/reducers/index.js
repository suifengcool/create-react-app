
// 合并reducer
import { combineReducers } from 'redux'
import todo from './todo'
// import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todo,
    // visibilityFilter
})

export default todoApp