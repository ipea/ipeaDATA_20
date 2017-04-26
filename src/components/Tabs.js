import React from 'react';
// import {Tab, Row, Col,Nav,NavItem, NavDropdown, MenuItem, Button, ButtonGroup, DropdownButton} from 'react-bootstrap'


        class Tabs extends React.Component {
        render(){
        return (
<ul className="nav nav-pills">
    <li className={this.props.tabcolor1}>
        <a href={'/' + this.props.tabname1} data-toggle="dropdown" className="dropdown-toggle">{this.props.tabname1} <b className="caret"></b></a>
        <ul className="dropdown-menu" id="menu1">
            <li><a href="#">Temas</a>
                <ul className="dropdown-menu sub-menu">
                    <li><a href="#">{this.props.item1}</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                </ul>
            </li>
            <li><a href="#">{this.props.item2}</a></li>
            <li><a href="#">{this.props.item3}</a></li>
            <li><a href="#">{this.props.item4}</a></li>
            <li><a href="#">{this.props.item5}</a></li>
            <li><a href="#">{this.props.item6}</a></li>
            <li><a href="#">{this.props.item7}</a></li>
            <li><a href="#">{this.props.item8}</a></li>
            <li><a href="#">{this.props.item9}</a></li>
            
           
        </ul>
    </li>
    <li className={this.props.tabcolor2}>
        <a href={'/' + this.props.tabname2} data-toggle="dropdown" className="dropdown-toggle">{this.props.tabname2} <b className="caret"></b></a>
        <ul className="dropdown-menu" id="menu1">
            <li>
                <a href="#">2-level Menu <i className="icon-arrow-right"></i></a>
                <ul className="dropdown-menu sub-menu">
                    <li><a href="#">{this.props.item1I}</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                </ul>
            </li>
          <li><a href="#">{this.props.item2I}</a></li>
          <li><a href="#">{this.props.item3I}</a></li>
          <li><a href="#">{this.props.item4I}</a></li>
          <li><a href="#">{this.props.item5I}</a></li>
          <li><a href="#">{this.props.item6I}</a></li>
          <li><a href="#">{this.props.item7I}</a></li>
           
            
                     
        </ul>
    </li>
    <li className={this.props.tabcolor3}>
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

