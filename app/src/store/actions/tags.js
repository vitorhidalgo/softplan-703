export const addTag = (name) => ({
    type: 'ADD_TAG',
    payload: { name }
});

export const filterTag = (id) => ({
    type: 'FILTER_TAG',
    payload: { id }
});