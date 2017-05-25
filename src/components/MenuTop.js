import React, { Component } from 'react'
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap"
import { Link } from "react-router-dom"

class MenuTop extends Component {

    constructor(){
        super();
        this.renderDropdownButton = this.renderDropdownButton.bind(this);
        this.menu = this.menu.bind(this);
       
    }
    
    menu() {
    console.log("funcao");
        return  <ul className="submenu-2"></ul>
   
    }


    renderDropdownButton(title,i,x){
      
    
        return(
            <Link to={`/${title}`}>
          
                <ul  className="menu" title={title} key={i} id={`dropdown-basic-${i}`}  >
                  <li>{title}
                     <ul  className="submenu-1">
                       { 
                       console.log(x[3].name + " merda" )
                       }{
                        x.map(function(itens, j){
                        const itensSub = Object.keys(itens).map((keys) => itens[keys]);
                        const itensSub1 = itensSub[Object.keys(itensSub)[2]];
                        
                       // console.log(itensSub1);
//                        console.log(itens.subItens[0].name);
                        
                        
                            return <li eventKey={j}> <Link to={`/${itens.fantasia}`}> {itens.name}  </Link>
                           {console.log( itens.subItens.length)}
                             
                             menu()
                            {itens.subItens.length>0 &&
                                 <ul className="submenu-2">
                                
                                {itens.subItens.map(function(subi, j){
//                            console.log(subi.name +" " +  itens.name + " " +title);
                            
                                return <li><Link to={`/${subi.fantasia}`}> {subi.name}  </Link></li>
                        } )}  
                        </ul>
                        }
                        
                        
                           </li>
                           
                      })} 
                      
                       </ul>
                    </li>
                </ul>
            </Link>
        );
    }
      
    render(){
        
        const itens = this.props.itens
       const itensNames = Object.keys(itens).map((keys) => itens[keys].name)
       const itensSub = Object.keys(itens).map((keys) => itens[keys].itens)
       var teste = itens.Macroeconômico.itens
       
       const teste2 = teste.map(function (object){
         return object.name
        
     })
       const teste3 = teste.map(function (object){
         return object.subItens
        
     })
       console.log(teste3[0][0].name);
       console.log(teste3.length);
      
     
      
        return(            
            <ButtonToolbar item={itensSub}>{itensNames.map((a,i) => this.renderDropdownButton(a,i,itensSub[i]))}</ButtonToolbar>
        )
    }
}

export default MenuTop