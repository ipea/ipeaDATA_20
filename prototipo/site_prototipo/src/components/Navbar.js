import React from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'

class Navbar2 extends React.Component {
	render(){
		return (
			<Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Ipeadata 2.0</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
			)

	}
}

export default Navbar2;

