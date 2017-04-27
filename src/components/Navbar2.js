import React from 'react';
import '../css/dashboard.css';
import img1 from '../img/logo.gif';
import img2 from '../img/logo_ipea.gif';

//import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
//import $ from 'jquery'

class Navbar2 extends React.Component {
	render(){
//const Navbar2 = (props) => {
	return (
   <nav className="navbar navbar-custom navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href={'/' + this.props.navname} className="navbar-brand">
          <img src={img1}  />
          </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Fale Conosco</a></li>
            <a href={'/' + this.props.navname} className="navbar-brand">
              <img src={img2}  />
            </a>
          </ul>
          <form className="navbar-form navbar-right">
            <input type="text" className="form-control" placeholder="Pesquisa..."/>
            <button type ="submit" className="btn btn-default">Pesquisar</button>
          </form>
        </div>
      </div>
    </nav>
		)
}  
}

export default Navbar2;

