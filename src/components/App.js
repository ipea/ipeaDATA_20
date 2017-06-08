import React, { Component } from "react";
import "../css/dashboard.css";
import { Grid, Col, Row } from "react-bootstrap";
import {EJ} from "jsrender";
import Navbar from "./Navbar";
import MenuLeft from "./MenuLeft";
import MenuTop from "./MenuTop";
import Content from "./Content";
import Footer from "./Footer";
import GridSerie from "./GridSerie";
import Datatable from "./Datatable";
/*import MenuLeftCustom from "./MenuLeftCustom";*/
/*import { itensMenuTop } from "../data/state";*/
import { itensDropMenu } from "../data/dropdown";
import { itensTabs } from "../data/itensComponenteTab";

class App extends Component {
  render() {
    //console.log(this.props.match.params)

    return (
      <Grid>
        <Row className="navbar">
          <Col md={12}>
            <Navbar itens={itensDropMenu} navname="Ipeadata" />
          </Col>
        </Row>
        <Row className="menu-top">
          <Col className="menu-left" md={2}>
          {/*<MenuLeftCustom itens={itensTabs} />*/}
          <MenuLeft
              itens={itensTabs}
              menuname={this.props.match.params.id}
              menucolor={this.props.match.params.id + "-nav-sidebar"}
              sidecolor={this.props.match.params.id + "-sidebar"}
            />
          </Col>
          <Col md={10}>
            <MenuTop
              itens={itensTabs}
              tabcolor={this.props.match.params.id + "-dropdown"}
              togle={this.props.match.params.id + "-dropdown-toggle"}
            />
          </Col>
          <Col className="content" md={10}>
            <Content url={this.props.match.params} />
            <Datatable />
          </Col>
        </Row>
        <Row className="down-area">
          <Col md={2}> </Col>
        </Row>
        <Row >
          <Col md={12}> </Col>
          <Footer/>
        </Row>
      </Grid>
    );
  }
}

export default App;