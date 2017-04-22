import React, { Component } from 'react';
import '../css/App.css';
import { Grid, Col, Row } from "react-bootstrap"

import Navbar from "./Navbar"
import MenuLeft from "./MenuLeft"
import MenuTop from "./MenuTop"
import Content from "./Content"

import { itensMenuTop } from "../data/state"

class App extends Component {
  render() {
    console.log(this.props.match.params.id)
    return (
      
      <Grid>
        <Row className="navbar">
          <Col md={12}>
            <Navbar navname="Ipeadata"/>
          </Col>          
        </Row>
        <Row className="menu-top">
          <Col className="menu-left" md={2}>
            <MenuLeft menuname="Macroeconomico" menucolor="nav-sidebar1" sidecolor="sidebar1"/>
          </Col>
          <Col  md={10}> 
            <MenuTop tabname1="Ipeadata" tabcolor1="dropdown4" tabname2="Regional"  tabcolor2="dropdown2" tabname3="Social" tabcolor3="dropdown3" itens={itensMenuTop} />
          </Col>          
        </Row>
        <Row className="down-area">
         <Col md={2}> </Col>          
          <Col className="content" md={10}>
            <Content />
          </Col>
        </Row>
      
      
      
      </Grid>
    )
  }
}

export default App;
