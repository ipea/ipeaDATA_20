import React, { Component } from 'react'
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap"
import { Link } from "react-router-dom"

class MenuTop extends Component {

    constructor(){
        super()
        this.renderDropdownButton = this.renderDropdownButton.bind(this)
    }

    renderDropdownButton(title, i){
        return(
            <Link to={`/${title}`}>
                <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3" active>Active Item</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
            </Link>
        )
    }
      
    render(){
        const itens = this.props.itens
        const itensNames = Object.keys(itens).map((keys) => itens[keys].name)

        return(            
            <ButtonToolbar>{itensNames.map((a,i) => this.renderDropdownButton(a,i))}</ButtonToolbar>
        )
    }
}

export default MenuTop