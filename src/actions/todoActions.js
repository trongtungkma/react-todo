export const createAddTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: {
            text,
        }
    }
}

export const createInitAction = () => {
    return {
        type: '@@INIT',
        payload: {}
    }
}
