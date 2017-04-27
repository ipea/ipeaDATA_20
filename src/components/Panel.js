import React from 'react';
import '../css/dashboard.css';
//import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
//import $ from 'jquery'

class Panel extends React.Component {
render(){
//const Jumbotron = (props) => {
	return (

<div className={" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 " + this.props.paneltype + " " + this.props.type}>
  <div className="panel-heading">
    <h3 className="panel-title">{this.props.title}</h3>
  </div>
  <div>
      <div className={this.props.jumboname}>
        <p>{this.props.text1}</p>
        <p>{this.props.text2}</p>
        <p>{this.props.text3}</p>
        <p>{this.props.text4}</p>
      </div>
  </div>
</div>


		)
  }
}

export default Panel;

