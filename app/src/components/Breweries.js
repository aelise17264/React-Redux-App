import React from 'react';
import {connect} from 'react-redux';
import Brew from './Brew'

function Breweries(props){
    return(
        <>
        <h2>Find the Best Breweries to visit</h2>
        {
            props.brews.map((drink) => {
                return <Brew
                key={drink.id}
                drink={drink}/>
            })
        }
        </>
    )
}

function mapStateToProps(state){
    return{
        brews: state.brews
    }
}

export default connect(mapStateToProps, {})(Breweries)