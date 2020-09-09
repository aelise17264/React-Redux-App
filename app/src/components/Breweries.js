import React from 'react';
import {connect} from 'react-redux';
import Brew from './Brew'

function Breweries(props){
    return(
        <>
        <div className='card'>
        {
            props.brews.map((drink) => {
                return <Brew
                key={drink.id}
                drink={drink}/>
            })
        }
        </div>
        </>
    )
}

function mapStateToProps(state){
    return{
        brews: state.brews
    }
}

export default connect(mapStateToProps, {})(Breweries)