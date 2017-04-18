import React from 'react';
//import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
//import $ from 'jquery'

class Jumbotron extends React.Component {
render(){
//const Jumbotron = (props) => {
	return (
    
    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
      <div className={this.props.jumboname}>
        <h1>{this.props.title}</h1>
      </div>
  </div>


		)
  }
}

export default Jumbotron;

