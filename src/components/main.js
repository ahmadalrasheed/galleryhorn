import React from 'react';
import Hornedbeasts from './hornedbeasts';
import './main.css';
import Data from './data.json';
import DropDown from './dropdown';



class Main extends React.Component {

  render() {
    // {DropDown;}
    return (
      <div>
        <DropDown Filterhorn={this.props.Filterhorn}/>
        {Data.map( items => {
          if( items.horns === this.props.NumOfHorn || this.props.NumOfHorn === 0 ){
            return(
              <>
                {/* {console.log( this.state.NumOfHorn )} */}
                <Hornedbeasts UpdateState={this.props.UpdateState} DisplayModel={this.props.DisplayModel} title={items.title} image_url={items.image_url} description={items.description}/>
              </>
            );
          }
        }
        )}
      </div>
    );
  }
}




export default Main;
