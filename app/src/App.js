import React, {useEffect} from 'react';
import './App.css';
import Breweries from './components/Breweries';
import {connect} from 'react-redux';
import {chaser} from './components/actions'

function App({chaser, loadingFacts, errorMessage}) {
  useEffect(() => {
    chaser();
  },[chaser])

  return (
    <div className="App">
     <h1>Best Breweries in America</h1>
  {!loadingFacts ? <Breweries/> : <div>...Brewing up your request</div>}
  {errorMessage !== "" ? <div>'{errorMessage}'</div> : null}

    </div>
  );
}

function mapStateToProps(state){
  return{
    loadingFacts: state.loadingFacts
  }
}

export default connect(mapStateToProps, {chaser})(App);
