import{
    BREW_FACTS,
    BREW_FACTS_SUCCESS,
    BREW_FACTS_ERROR,
    } from '../components/actions'


export const initialState = {
    brews: [],
    loadingFacts: false,
    errorMessage: ''
}

export default (state = initialState, action) => {
switch(action.type){
    case BREW_FACTS:
        return{
            ...state,
            loadingFacts: true,
        };
    case BREW_FACTS_SUCCESS:
        return{
            ...state,
            brews: action.payload,
            loadingFacts: false
        }    

    case BREW_FACTS_ERROR:
        return{
            ...state,
            loadingFacts: false
        }


    default:
        return state;
}
}