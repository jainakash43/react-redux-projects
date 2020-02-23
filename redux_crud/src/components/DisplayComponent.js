import React, { Component } from "react";
import { connect } from 'react-redux';
import { Modal, Button, ButtonToolbar } from "react-bootstrap";
import "../styles/DisplayComponent.css";
import EditComponent from './EditComponent';
import { deleteActionCreator }  from '../action/deleteActionCreator.js';
class DisplayComponent extends Component {

    constructor(props) {

        super(props);
        this.state = { show: false ,name:'',id:''};

    }
    handleShow(n,i) {
       
        this.setState({ show: true, name: n , id: i});
    }
    handleClose= () => {
        this.setState({ show: false });
    }

    handleDelete(id,name) {


        this.props.delete(id, name);
       

    }
   
    render() {
        
        return (

            <div className="container">
                

                <table className="table table-striped table-bordered" style={{ fontSize: "medium" }}  >
                    <thead>
                        <tr className="thead-dark">
                            <th>Name</th>

                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {this.props.st.length > 0 ? (
                            this.props.st.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => {this.handleDelete(student.id,student.name) }} >
                                            <span className="glyphicon glyphicon-remove"  ></span>Delete
                                                </button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => { this.handleShow(student.name,student.id) }} >
                                            <span className="glyphicon glyphicon-edit"></span>Edit
                                                </button>
                                         
                                                    
                                    </td>
                                  
                                </tr>

                            ))
                        ) : (
                                <tr>
                                    <td colSpan={2}>No users</td>
                                </tr>
                            )}
                    </tbody>
                </table>
                <EditComponent show={this.state.show} onHide={this.handleClose} name={this.state.name} id={this.state.id} />
                

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

        st: state.student_reducer
    }
}

function mapDispatchToProps(dispatch) {

    return {
        delete: (id,name) => dispatch(deleteActionCreator(id,name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);