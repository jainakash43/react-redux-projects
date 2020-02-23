import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { editActionCreator } from "../action/editActionCreator";
import { addActionCreator } from "../action/addActionCreator";
class EditComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: ''
        }
    }
    handleSubmit(event) {
        this.props.st(this.state.id, this.state.name);
        this.setState({ name: '', id: '' })
        event.preventDefault();
        this.props.onHide();
    }
    
    handleChange(event) {
        this.setState({ id: this.props.id, name: event.target.value });
    }
   
    render() {
        
       
        return (

            <Modal show={this.props.show} onHide={this.props.onHide} animation={false} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <form className="form-inline" onSubmit={(event) => { this.handleSubmit(event) }} >
                        <div className="form-group form-group-lg">
                            <div className="input-group col-md-11">
                                <input type="text" className="form-control " placeholder={this.props.id} name="id" value={this.props.id} onChange={(event) => { this.handleChange(event) }} readOnly />
                            </div>
                        </div>

                        <div className="form-group form-group-lg">
                            <div className="input-group col-md-11">
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={(event) => { this.handleChange(event) }} placeholder={this.props.name} />
                            </div>
                        </div>
                        {' '}

                        <input type="submit" className="btn btn-primary btn-lg" value="Submit" />

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        Close
          </Button>
                    
                </Modal.Footer>
            </Modal>
                
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
        st: (id, name) => dispatch(editActionCreator(id, name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);