import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Hornedbeasts extends React.Component{
  constructor( props ){
    super( props );
    console.log( props );
    this.state = {
      votes:0,
    };
  }
 UpdateState= ()=>{
   console.log( Hornedbeasts );
   this.setState( {
     votes:this.state.votes + 1
   } );
 }
 render(){
   return(
     <div className="centerdiv">
       <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={this.props.image_url} height="300px" width="300px" />
         <Card.Body>
           <Card.Title>{this.props.title}</Card.Title>
           <Card.Text>{this.props.description}</Card.Text>
           <Button onClick={this.UpdateState} variant="primary">Vote</Button>
           <p>votes: {this.state.votes} ❤</p>
         </Card.Body>
       </Card>
     </div>
   );
 }

}
export default Hornedbeasts;
