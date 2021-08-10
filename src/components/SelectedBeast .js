import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeasts extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      vote:1,
    };
  }


  render(){
    return(
      <>
        {/* {this.props.ModalDidsplay()} */}
        {/* {console.log( this.props.ModalDidsplay() )} */}
        <Modal show={this.props.show}>
          <Modal.Header onClick={()=>this.props.CloseModel()} closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>this.props.CloseModel()} variant="secondary">
            Close
            </Button>
            <Button onClick={()=>this.props.CloseModel()} variant="primary">
            Save Changes
            </Button>
          </Modal.Footer>

        </Modal>
      </>
    );

  }

}

export default SelectedBeasts;
