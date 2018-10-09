import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action){
    switch (action.type){
        case FETCH_POST:
        // === ES5 === 
        //     const post = action.payload.data;
        //     const newState = { ...state }; 
        //     newState[post.id] = post;
        //     return newState
        //     (take the new state object, add on additional property of post id and set equal to post)
        //     below is the ES6 version 
            return { ...state, [action.payload.data.id]: action.payload.data  }
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id')
        default:
            return state;
    }
}