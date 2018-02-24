const filter = (state = 'All', action) => {
    switch (action.type) {
        case 'FILTER_TODO':
            return action.status
        default:
            return state
    }
}

export default filter