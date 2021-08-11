import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Data from './data.json';



class SelectedBeasts extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      vote:1,
    };
  }

  found=()=>{
    const founded = Data.find( element => element.title === this.props.title );
    return founded;
  }


  render(){
    // console.log( this.props );

    return(
      <>
        {/* {this.props.ModalDidsplay()} */}
        {/* {console.log( this.props.ModalDidsplay() )} */}
        <Modal show={this.props.show}>
          <Modal.Header onClick={()=>this.props.CloseModel()} closeButton>
            <Modal.Title>{this.props.titleUpdate}</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={this.props.imageUpdate} height="400" width="470"/></Modal.Body>
          <Modal.Footer>
            {this.props.descriptionUpdate}
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
