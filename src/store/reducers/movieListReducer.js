import {UPDATE_MOVIES} from '../action/updateMovies';

const movielistReducer = (state = {},{type,payload}) => {
    switch(type){
        case UPDATE_MOVIES:
            return {name:payload}
            default :
        return state
    };
};

export default movielistReducer;