import React from 'react';

class Hornedbeasts extends React.Component{
    render(){
        return(
            <div className="divs">
                <h2>{this.props.name}</h2>
                <img src={this.props.imgtitle} title={this.props.title} height={this.props.height} width={this.props.width} alt={this.props.alt}/>
                <p>{this.props.paragraph}</p>

                
            </div>
        )
    }

}
export default Hornedbeasts;