import React from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'

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
      
<div>
      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Ipeadata 2.0</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Fale Conosco</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search..."/>
          </form>
        </div>
      </div>
    </nav>
</div>


			)

	}
}

export default Navbar2;

