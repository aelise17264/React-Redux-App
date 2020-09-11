import axios from 'axios';

export const BREW_FACTS = 'BREW_FACTS';
export const BREW_FACTS_SUCCESS = 'BREW_FACTS_SUCCESS';
export const BREW_FACTS_ERROR = 'BREW_FACTS_ERROR';
export const ADD_BREW = 'ADD_BREW'

export const chaser = () => {
    return(dispatch) =>{
        dispatch({type: BREW_FACTS});
        axios.get('https://api.openbrewerydb.org/breweries')
        .then((res) =>{
            console.log(res.data)
            dispatch({type: BREW_FACTS_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            dispatch({type: BREW_FACTS_ERROR})
        })
    }
}

export const postBrew = (newBrew) => {
    return(dispatch) => {
        dispatch({type: BREW_FACTS})
        axios.post('https://api.openbrewerydb.org/breweries', newBrew)
        .then(res => {
            dispatch({type: ADD_BREW, payload: res.data})
        })
        .catch(error => {
            dispatch({type: BREW_FACTS_ERROR})
        })
    }
}