import React from 'react';
import Hornedbeasts from './hornedbeasts';
import './main.css';
import Data from './data.json';

class Main extends React.Component {

  render() {
    return (
      <div>
        {Data.map( items=>{
          return(
            <>

              <Hornedbeasts DisplayModel={this.props.DisplayModel} title={items.title} image_url={items.image_url} description={items.description}/>

            </>
          );


        }

        )}


        {/* <Hornedbeasts name="Unicorn Head" imgtitle="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" title="Unicorn Head" alt="Unicorn Head photo" height="500" width="500" paragraph="Someone wearing a creepy unicorn head mask"/>
                <Hornedbeasts name="Rhino Family" imgtitle="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" title="Rhino Family" alt="Rhino Family photo" height="300" width="500" paragraph="Mother (or father) rhino with two babies" />
                <Hornedbeasts name="UniWhal" imgtitle="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title="UniWhal" alt="UniWhal photo" height="300" width="500" paragraph="A unicorn and a narwhal nuzzling their horns" /> */}





      </div>
    );
  }

}
export default Main;
