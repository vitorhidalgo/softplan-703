import { combineReducers } from 'redux';

import tags from './tags';
import cards from './cards';

export default combineReducers({
    tags,
    cards
});