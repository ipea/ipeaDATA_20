 import React from 'react';
// import {Tab, Row, Col,Nav,NavItem, NavDropdown, MenuItem, Button, ButtonGroup, DropdownButton} from 'react-bootstrap'


 class Tabs extends React.Component {
   render(){
     return (
      <ul className="nav nav-pills">
        <li className="dropdown">
          <a href={'/' + this.props.tabname1} data-toggle="dropdown" className="dropdown-toggle">{this.props.tabname1} <b className="caret"></b></a>
          <ul className="dropdown-menu" id="menu1">
            <li>
                <a href="#">2-level Menu <i className="icon-arrow-right"></i></a>
                <ul className="dropdown-menu sub-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                </ul>
            </li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>           
          </ul>
        </li>
          <li className="dropdown">
          <a href={'/' + this.props.tabname2} data-toggle="dropdown" className="dropdown-toggle">{this.props.tabname2} <b className="caret"></b></a>
          <ul className="dropdown-menu" id="menu1">
            <li>
                <a href="#">2-level Menu <i className="icon-arrow-right"></i></a>
                <ul className="dropdown-menu sub-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                </ul>
            </li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>           
          </ul>
        </li>
          <li className="dropdown">
          <a href={'/' + this.props.tabname3} data-toggle="dropdown" className="dropdown-toggle">{this.props.tabname3} <b className="caret"></b></a>
          <ul className="dropdown-menu" id="menu1">
            <li>
                <a href="#">2-level Menu <i className="icon-arrow-right"></i></a>
                <ul className="dropdown-menu sub-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                </ul>
            </li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>           
          </ul>
        </li>
      </ul>

       )

   }
}

 export default Tabs;

