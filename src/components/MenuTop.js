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
            <Link to={`${title}`}>

                
                <DropdownButton  title={title} key={i} id={`dropdown-basic-${i}`}  >
                    {x.map(function(object, j){
                        //console.log(i)                
                        // var test5 = Object.keys(object).map((keys) => object[keys]);
                        // var test6 = test5[Object.keys(test5)[2]];
                        // var test7 = test6[Object.keys(test6)[0]];
                        // var test8 = test7[Object.keys(test7)[0]];
                        // var test9 = Object.keys(test8).map((keys) => test8[keys]);
                        // console.log(test8)
                        // console.log(object)
                        // var test = Object.keys(j)
                        //console.log(test)
                        // var test2 = Object.keys(test)
                        // console.log(test2)
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