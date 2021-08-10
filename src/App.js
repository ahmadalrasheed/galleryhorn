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
    }
  }

  DisplayModel=()=>{
    this.setState({
      show:true,
    })
  }

  CloseModel=()=>{
    this.setState({
      show:false,
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main DisplayModel={this.DisplayModel}/>
        <SelectedBeasts CloseModel={this.CloseModel} show={this.state.show} />
        <Footer />
        {console.log(this.state.show)};
      </>

    );
  }

}

export default App;