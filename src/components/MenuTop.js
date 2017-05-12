import React, { Component } from 'react'
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap"
import { Link } from "react-router-dom"

class MenuTop extends Component {

    constructor(){
        super()
        this.renderDropdownButton = this.renderDropdownButton.bind(this)
    }

    renderDropdownButton(title,i,x){
        return(
            <Link to={`/${title}`}>
                
                <DropdownButton  title={title} key={i} id={`dropdown-basic-${i}`}  >
                    {x.map(function(object, j){
                      return <li  className="teste" eventKey={j}> <Link to={`/${object.fantasia}`}> {object.name}  </Link> 
                      
                        
                        </li>;
                      })}    
                    
                </DropdownButton>
                
            </Link>
        )
    }
      
    render(){
        
        const itens = this.props.itens
       const itensNames = Object.keys(itens).map((keys) => itens[keys].name)
       const itensSub = Object.keys(itens).map((keys) => itens[keys].itens)
        
        

        return(            
            <ButtonToolbar>{itensNames.map((a,i) => this.renderDropdownButton(a,i,itensSub[i]))}</ButtonToolbar>
        )
    }
}

export default MenuTop