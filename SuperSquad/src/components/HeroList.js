import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../action';

import CharacterList from './CharacterList';
import '../styles/index.css';
class HeroList extends Component {

    render() {

        return (

            <div className="App">
                <h4> Heroes </h4>
                <ul className="list-group">{

                    this.props.heroes.map(character => {
                        return (

                            <li key={character.id} className="list-group-item">
                                <div className="list-item" >{character.name}</div>
                                <div className="list-item right-button"
                                    onClick={() => this.props.removeCharacterById(character.id)}
                                >
                                    +
                                    </div>
                            </li>
                        );
                    })
                }
                </ul>

            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        heroes: state.heroes_reducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeCharacterById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);