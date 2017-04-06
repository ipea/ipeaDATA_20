 import React from 'react';
// import {Tab, Row, Col,Nav,NavItem, NavDropdown, MenuItem, Button, ButtonGroup, DropdownButton} from 'react-bootstrap'



 class Tabs extends React.Component {
   render(){
     return (
    <div className="col-sm-9 col-sm-offset-2">
      <ul className="nav nav-pills">
        <li role="presentation"><a href="macroeconomico.html">macroeconomico</a></li>
        <li role="presentation"><a href="regional.html">Regional</a></li>
        <li role="presentation"><a href="social.html">Social</a></li>
      </ul>
    </div>



//       <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
//       <Row className="clearfix">
//         <Col sm={2}>
//            <ButtonGroup vertical>
//               <Button>Button</Button>
//               <Button>Button</Button>
//               <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
//                 <MenuItem eventKey="1">Dropdown link</MenuItem>
//                 <MenuItem eventKey="2">Dropdown link</MenuItem>
//               </DropdownButton>
//               <Button>Button</Button>
//               <Button>Button</Button>
//               <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
//                 <MenuItem eventKey="1">Dropdown link</MenuItem>
//                 <MenuItem eventKey="2">Dropdown link</MenuItem>
//               </DropdownButton>
//               <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
//                 <MenuItem eventKey="1">Dropdown link</MenuItem>
//                 <MenuItem eventKey="2">Dropdown link</MenuItem>
//               </DropdownButton>
//             </ButtonGroup>



//         </Col>
//         <Col sm={10}>
//           <Nav bsStyle="tabs">
//             <NavDropdown eventKey="3" title="macroeconômico" id="nav-dropdown-within-tab">
//               <MenuItem eventKey="3.1">/</MenuItem>
//               <MenuItem eventKey="3.2">Another action</MenuItem>
//               <MenuItem eventKey="3.3">Something else here</MenuItem>
//               <MenuItem divider />
//               <MenuItem eventKey="3.4">Separated link</MenuItem>
//             </NavDropdown>
//             <NavDropdown eventKey="3" title="regional" id="nav-dropdown-within-tab">
//               <MenuItem eventKey="3.1">Action</MenuItem>
//               <MenuItem eventKey="3.2">Another action</MenuItem>
//               <MenuItem eventKey="3.3">Something else here</MenuItem>
//               <MenuItem divider />
//               <MenuItem eventKey="3.4">Separated link</MenuItem>
//             </NavDropdown>
//             <NavDropdown eventKey="3" title="social" id="nav-dropdown-within-tab">
//               <MenuItem eventKey="3.1">Action</MenuItem>
//               <MenuItem eventKey="3.2">Another action</MenuItem>
//               <MenuItem eventKey="3.3">Something else here</MenuItem>
//               <MenuItem divider />
//               <MenuItem eventKey="3.4">Separated link</MenuItem>
//             </NavDropdown>
//           </Nav>
//         </Col>
//         <Col sm={2}>
//         </Col>
//         <Col sm={10}>
//           <Tab.Content animation>
//             <Tab.Pane eventKey="first">
//               Tab 1 content
//             </Tab.Pane>
//             <Tab.Pane eventKey="second">
//               Tab 2 content
//             </Tab.Pane>
//             <Tab.Pane eventKey="3.1">
//               Tab 3.1 content
//             </Tab.Pane>
//             <Tab.Pane eventKey="3.2">
//               Tab 3.2 content
//             </Tab.Pane>
//             <Tab.Pane eventKey="3.3">
//               Tab 3.3 content
//             </Tab.Pane>
//             <Tab.Pane eventKey="3.4">
//               Tab 3.4 content
//             </Tab.Pane>
//           </Tab.Content>
//         </Col>
//       </Row>
//     </Tab.Container>
       )

   }
}

 export default Tabs;

