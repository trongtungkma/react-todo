export const createAddTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: {
            key: Date.now(),
            text
        }
    }
}