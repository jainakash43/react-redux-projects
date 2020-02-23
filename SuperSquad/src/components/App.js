import React, { Component } from 'react';
import logo from '../logo.svg';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SuperSquad from './SuperSquad';
import '../App.css';


class App extends Component {
    render() {

        return (

            <div className="App">
                <h2>SuperSquad</h2>
                <div className="col-md-4"><CharacterList/></div>
                <div className="col-md-4"><HeroList /></div>
                <div className="col-md-4"><SuperSquad/></div>
            </div>


        );
    }
}

export default App;
