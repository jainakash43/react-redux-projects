import React, { Component } from "react";
import { Form, Button }  from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homeComponent.css';
import {addActionCreator} from "../action/addActionCreator";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
class HomeComponent extends Component {

    constructor() {

        super();
        this.state = {

            id: '',
            name: '', 
        }
    }
    handleChange(event) {

        this.setState({ [event.target.name]:event.target.value });

    }

    handleSubmit(event) {

        this.props.st(this.state.id, this.state.name);
        this.setState({ id: '', name: '' });
        event.preventDefault();
       
    }
    

    render() {
       
       
        return (
            
            <div className="homeComponent">

                <form className="form-inline" onSubmit={(event) => { this.handleSubmit(event) }} >
                    <div className="form-group form-group-lg">
                        <div className="input-group col-md-11">
                            <input type="number" className="form-control " placeholder="Enter Id" name="id" value={this.state.id} onChange={(event) => { this.handleChange(event) }} />
                         </div>   
                     </div>
                   
                     <div className="form-group form-group-lg">
                        <div className="input-group col-md-11">
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={(event) => {this.handleChange(event)}} placeholder="Enter name" />
                           </div>
                    </div>
                    {' '}

                    <input type="submit" className="btn btn-primary btn-lg" value="Submit"/>
                    
                </form>
                


            </div>
               );


    }

}
function mapDispatchToProps(dispatch) {
    
    return {
        st: (id,name) => dispatch(addActionCreator(id, name))
    }
}
export default connect(null,mapDispatchToProps)(HomeComponent);