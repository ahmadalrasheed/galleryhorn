/* eslint-disable */
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeasts from './components/SelectedBeast '


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
      image_url:'',
      title:'',
      description:''
    }
  }

  // DisplayModel=()=>{
  //   this.setState({
  //     show:true,
  //   })
  // }

  CloseModel=()=>{
    this.setState({
      show:false,
    })
  }

  Test=(img,title1,description1)=>{
    this.setState({
      show:true,
      image_url:img,
      title:title1,
      description:description1
    })
    console.log('test function');
  }

  render() {
    return (
      <>
        <Header />
        <Main newprops={this.Test} DisplayModel={this.DisplayModel}/>
        <SelectedBeasts CloseModel={this.CloseModel} show={this.state.show}
        titleUpdate={this.state.title}
        descriptionUpdate={this.state.description}
        imageUpdate={this.state.image_url}
         />
        <Footer />
        {console.log(this.state.show)};
      </>

    );
  }

}

export default App;