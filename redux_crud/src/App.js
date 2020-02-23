import React, { Component } from 'react';
import logo from './logo.svg';
import HomeComponent from './components/homeComponent.js';
import DisplayComponent from './components/DisplayComponent.js';
import { connect } from 'react-redux';
import './App.css';
import addActionCreator from './action/addActionCreator';

class App extends Component {

    constructor(props) {

        super(props);

    }
    render() {

        
        return (
            <div className="App">
                <HomeComponent />
                <DisplayComponent/>
                
            </div>
        );
    }
}



export default connect(null,null)(App);
