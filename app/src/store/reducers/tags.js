const INITIAL_STATE = require('../../data/gabinete.json');

export default function tags(state = INITIAL_STATE.tags, action) {
    switch (action.type) {
        case 'ADD_TAG':
            return [...state, {
                id: Math.random(),
                name: action.payload.name,
                background: '#' +  Math.random().toString(16).substr(-6),
                color: '#ffffff'
            }];
        case 'FILTER_TAG':
            console.log(action.payload.id);
            return state;
        default:
            return state;
    }
}