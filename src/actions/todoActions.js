export const createAddTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}

export const createInitAction = () => {
    return {
        type: '@@INIT',
        payload: {}
    }
}
