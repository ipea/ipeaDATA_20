import React from 'react';
// import {Tab, Row, Col,Nav,NavItem, NavDropdown, MenuItem, Button, ButtonGroup, DropdownButton} from 'react-bootstrap'


        class Tabs extends React.Component {
        render(){
        return (
<ul className="nav nav-pills">
    <li className={this.props.tabcolor1}>
        <a href={'/' + this.props.tabname1} data-toggle="dropdown" className="dropdown-toggle">{this.props.tabname1}</a>
        <ul className="dropdown-menu" id="menu1">
            <li><a href="#">{this.props.item1}</a>
                <ul className="dropdown-menu sub-menu">
                    <li><a href="#">Alguma coisa</a></li>
                    <li><a href="#">Alguma coisa</a></li>
                    <li><a href="#">Alguma coisa</a></li>
                </ul>
            </li>
            <li><a href="#">{this.props.item2}</a></li>
            <li><a href="#">{this.props.item3}</a></li>
            <li><a href="#">{this.props.item4}</a></li>
            <li><a href="#">{this.props.item5}</a></li>
            <li><a href={this.props.link6}>{this.props.item6}</a></li>
            <li><a href="#">{this.props.item7}</a></li>
            <li><a href="#">{this.props.item8}</a></li>
            <li><a href="#">{this.props.item9}</a></li>
            
           
        </ul>
    </li>
    <li className={this.props.tabcolor2}>
        <a href={'/' + this.props.tabname2} data-toggle="dropdown" className="dropdown-toggle">{this.props.tabname2}</a>
        <ul className="dropdown-menu" id="menu1">
            <li><a href="#">{this.props.item10} <i className="icon-arrow-right"></i></a>
                <ul className="dropdown-menu sub-menu">
                    <li><a href="#">Alguma coisa</a></li>
                    <li><a href="#">Alguma coisa</a></li>
                    <li><a href="#">Alguma coisa</a></li>
                </ul>
            </li>
          <li><a href="#">{this.props.item11}</a></li>
          <li><a href="#">{this.props.item12}</a></li>
          <li><a href="#">{this.props.item13}</a></li>
          <li><a href="#">{this.props.item14}</a></li>
          <li><a href="#">{this.props.item15}</a></li>
          <li><a href="#">{this.props.item16}</a></li>

           
            
                     
        </ul>
    </li>
    <li className={this.props.tabcolor3}>
        <a href={'/' + this.props.tabname3} data-toggle="dropdown" className="dropdown-toggle">{this.props.tabname3} </a>
        <ul className="dropdown-menu" id="menu1">
                  <li><a href="#">{this.props.item17} <i className="icon-arrow-right"></i></a>
                <ul className="dropdown-menu sub-menu">
                    <li><a href="#">Alguma coisa</a></li>
                    <li><a href="#">Alguma coisa</a></li>
                    <li><a href="#">Alguma coisa</a></li>
                </ul>
            </li>
          <li><a href="#">{this.props.item18}</a></li>
          <li><a href="#">{this.props.item19}</a></li>
          <li><a href="#">{this.props.item20}</a></li>
          <li><a href="#">{this.props.item21}</a></li>
          <li><a href="#">{this.props.item22}</a></li>
          <li><a href="#">{this.props.item23}</a></li>
            

        </ul>
    </li>
</ul>

                )

        }
        }

export default Tabs;

