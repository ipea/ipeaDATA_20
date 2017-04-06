import React from 'react';
//import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
//import $ from 'jquery'

class Navbar2 extends React.Component {
	render(){
		return (

	 // <Navbar>
   //      <Navbar.Header>
   //        <Navbar.Brand>
   //          <a href="#">{this.props.navname}</a>
   //        </Navbar.Brand>
   //        <Navbar.Toggle />
   //      </Navbar.Header>
   //      <Navbar.Collapse>
   //        <Navbar.Form pullLeft>
   //          <FormGroup>
   //            <FormControl type="text" placeholder="Search" />
   //          </FormGroup>
   //          {' '}
   //          <Button type="submit">Submit</Button>
   //        </Navbar.Form>
   //      </Navbar.Collapse>
   //    </Navbar>
      

      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">{this.props.navname}</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Fale Conosco</a></li>
          </ul>
          <form className="navbar-form navbar-right">
            <input type="text" className="form-control" placeholder="Search..."/>
          </form>
        </div>
      </div>
    </nav>



			)

	}
}

export default Navbar2;

