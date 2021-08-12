import React from 'react';
import Form from 'react-bootstrap/Form';

class DropDown extends React.Component{
    SelectFromDropDown=()=>{
      return(
        <Form.Select onChange={this.props.Filterhorn} aria-label="Floating label select example">
          <option value="0">filter by number of horns: ALL</option>
          <option value="1" >one</option>
          <option value="2" >Two</option>
          <option value="3" >Three</option>
          <option value="100" >WOOW!!</option>
        </Form.Select>
      );
    }


    render(){
      return(
        <>
          {this.SelectFromDropDown()}
        </>
      );
    }


}
export default DropDown;
