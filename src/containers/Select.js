import React from 'react'
import { connect } from 'react-redux'
import './Select.sass'
import { filterTodo } from '../actions'

let Select = ({ state, dispatch }) => {
    const status = [{
        name: 'All',
        type: 0
    },{
        name: 'Active',
        type: 1
    },{ 
        name: 'Completed',
        type: 2
    }]

    const filter = (item) => {
        dispatch(filterTodo(item.name))
    }

    return (
        <div className="status-contain">
            <span>状态：</span>
            <ul>
                {
                    status.map((d,i)=>{
                        return (
                            <li 
                                key={i} 
                                style={{color: d.name === state.filter ? 'red' : '#333'}}
                                onClick={()=>{filter(d)}}>{d.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {state: state};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {dispatch};
};

Select = connect(mapStateToProps,mapDispatchToProps)(Select)

export default Select