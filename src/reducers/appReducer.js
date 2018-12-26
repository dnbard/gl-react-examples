import { DATE_SET } from '../actions/appActions';


const defaultState = {
    date: null,
    title: null,
    author: null,
    authors: [{
        id: 1,
        name: 'Alex'
    }],
    service: {
        levelOne: {
            entities: [{
                
            }]
        }
    }
};



export default function AppReducer(state = defaultState, action){
    if (action.type === DATE_SET){
        return Object.assign({}, state, { date: action.date });
    }

    return state;
}
