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
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={this.props.image_url}/></Modal.Body>
          <Modal.Footer>
            {this.props.description}
            <Button onClick={()=>this.props.CloseModel()} variant="secondary">
            Close
            </Button>
            <Button onClick={()=>this.props.CloseModel()} variant="primary">
            Save Changes
            </Button>
          </Modal.Footer>
          {console.log( this.props.title )}

        </Modal>
      </>
    );

  }

}

export default SelectedBeasts;
