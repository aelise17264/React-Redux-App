import axios from 'axios';

export const BREW_FACTS = 'BREW_FACTS';
export const BREW_FACTS_SUCCESS = 'BREW_FACTS_SUCCESS';
export const BREW_FACTS_ERROR = 'BREW_FACTS_ERROR';

export const chaser = () => {
    return(dispatch) =>{
        dispatch({type: BREW_FACTS});
        axios.get('https://api.openbrewerydb.org/breweries')
        .then((res) =>{
            dispatch({type: BREW_FACTS_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            dispatch({type: BREW_FACTS_ERROR})
        })
    }
}