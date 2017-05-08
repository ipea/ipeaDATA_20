import React, { Component } from 'react'
import { NavDropdown , MenuItem, ButtonToolbar, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Metadados from "./Metadados"
import Equipe from "./Equipe"
import Content from "./Content"

//<NavDropdown className="navbar-form navbar-right" eventKey={4} onSelect={this.handleSelect} title="Sobre" id="basic-nav-dropdown">
//<MenuItem eventKey={4.1}> <Link to={"/metadados"}> O que é  </Link> </MenuItem>
//<MenuItem eventKey={4.2}> <Link to={"/"}> Equipe Responsável  </Link> </MenuItem>
//<MenuItem eventKey={4.3}> <Link to={"/"}> Direitos de uso  </Link> </MenuItem>
//<MenuItem eventKey={4.4}> <Link to={"/"}> Dicas  </Link> </MenuItem>
//<MenuItem eventKey={4.5}> <Link to={"/"}> Links </Link> </MenuItem>
//</NavDropdown>


 class Navbar extends Component {
	constructor(){
        super();
        this.handleSelect = this.handleSelect.bind(this);
        this.renderDropdownButton = this.renderDropdownButton.bind(this);
    }
     
     renderDropdownButton(title, i, x){
         return(
             <Link to={`/${title}`}>
                 <NavDropdown className="navbar-form navbar-right" eventKey={i} title={title} id="basic-nav-dropdown">
                 	{x.map(function(object, i){
                 		return <MenuItem eventKey={i}> <Link to={`/${object.fantasia}`}> {object.name}  </Link> </MenuItem>;
                 	})}
                 </NavDropdown>              
             </Link>
         )
     }
     
     
    handleSelect(selectedKey){
    	return "\${selectedKey}";    
    }  
   render(){
	   
	   const itens = this.props.itens
       const itensNames = Object.keys(itens).map((keys) => itens[keys].name)
       const itensSub = Object.keys(itens).map((keys) => itens[keys].itens)
       console.log(itensSub)
       
        return(
                
       <nav texto="cara e coroa" className="navbar navbar-custom navbar-fixed-top">
          <div className="container-fluid">
           <div className="navbar-header">
             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
          
            <a href={'/' + this.props.navname} className="navbar-brand">
                <img src="logo.gif"  />
            </a>
            <a href="#" className="navbar-icone">
                <img src="ico_inglaterra.gif" />
            </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Fale Conosco</a></li>

                <a href={'/' + this.props.navname} className="navbar-brand">
                    <img src="logo_ipea.gif"  />
                </a>
            </ul>
            
            <Button className="navbar-form navbar-right">{itensNames.map((a,i) => this.renderDropdownButton(a,i, itensSub[i]))}</Button>
        
            
            <form className="navbar-form navbar-right">
                <input type="text" className="form-control" placeholder="Pesquisa..."/>
                <button type ="submit" className="btn btn-default">Pesquisar</button>
            </form>
        </div>
    </div>
</nav>
      
        
                )
        }
        }
        

export default Navbar;