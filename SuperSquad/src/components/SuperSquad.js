import React, { Component } from "react";
import { connect } from "react-redux";
import heroes_reducer from "../reducer/heroes_reducer";


class SuperSquad extends Component {

    calculateStrength() {

        let Strength = 0;

        this.props.total.forEach(total => Strength += total.strength);
        return Strength;

    }
    calculateSpeed() {

        let Speed = 0;
        this.props.total.forEach(total => Speed += total.speed);
        return Speed;
    }

    calculateIntelligent() {

        let Intelligent = 0;
        this.props.total.forEach(total => Intelligent += total.intelligence);
        return Intelligent;
    }

    render() {

        return (
            <div className="App" >
                <h4>SquadStats</h4>
                <ul className="list-group">

                    <li className="list-group-item">
                        <div className="list-item">Strength: {this.calculateStrength()}</div>
                    </li>

                    <li className="list-group-item">
                        <div className="list-item">Intelligent: {this.calculateIntelligent()}</div>
                    </li>

                    <li className="list-group-item">
                        <div className="list-item">Speed: {this.calculateSpeed()}</div>
                    </li>

                </ul>

            </div>

        )
            ;    }
    
}

function mapStatesToProps(state) {

    return {

        total: state.heroes_reducer
    }

}
export default connect(mapStatesToProps,null)(SuperSquad);



