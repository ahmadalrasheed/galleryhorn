import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeasts from './SelectedBeast ';






class Hornedbeasts extends React.Component{
  constructor( props ){
    super( props );
    // console.log( props );
    this.state = {
      votes:0,
    };
  }
 UpdateState= ()=>{
   //  console.log( Hornedbeasts );
   this.setState( {
     votes:this.state.votes + 1
   } );


 }
 DisplayUpdate = ()=>{
   //  <SelectedBeasts title={this.props.title} image_url={this.props.image_url} description={this.props.description}/>;
   //  this.props.DisplayModel();
   this.props.UpdateState( this.props.image_url,this.props.title,this.props.description );
 };


 render(){
   return(
     <div className="centerdiv">
       <Card style={{ width: '18rem' }}>
         <Card.Img onClick={this.DisplayUpdate} variant="top" src={this.props.image_url} height="300px" width="300px" />
         <Card.Body>
           <Card.Title>{this.props.title}</Card.Title>
           <Card.Text>{this.props.description}</Card.Text>
           <Button className="special" onClick={this.UpdateState} variant="primary">Vote</Button>
           <p>votes: {this.state.votes} ❤</p>
         </Card.Body>
       </Card>
     </div>
   );
 }

}
export default Hornedbeasts;
