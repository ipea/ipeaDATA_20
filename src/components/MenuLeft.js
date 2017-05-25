import React, { Component } from 'react'
import { ButtonToolbar, DropdownButton, MenuItem, Button, ButtonGroup, SplitButton } from "react-bootstrap"
import { Link } from "react-router-dom"

class MenuLeft extends Component {

    constructor(){
        super()
        this.renderMenu = this.renderMenu.bind(this)
    }
    renderMenu(name, i,x){
        return( 
       	     <Link to={`/${name}`}>
                
                <DropdownButton  title={name} key={i} id={"dropdown-basic-"+i}>
                 {x.map(function(object, j){ 
					return <MenuItem> teste</MenuItem>

                 })} 

                    
                </DropdownButton>
                
            </Link>
            )
    }
	
	
      
    render(){
		const itens = this.props.itens
		//console.log(itens)
       	//const itensNames = Object.keys(itens).map((keys) => itens[keys].name)
       	const itensSub = Object.keys(itens).map((keys) => itens[keys].itens)
       	//console.log(itensSub)

       	var test2 = null;
       	var x = Object.keys(itens).map((keys) => itens[keys].itens)
       	//console.log(x)

       	var teste10 = itensSub
       	console.log(itens.regional)


		
		
		// if (this.props.menuname == "macroeconomico"){

		// 	var test = itensSub[Object.keys(itensSub)[0]];
		// 	var i = 0;
		
		// } if (this.props.menuname == "regional"){

		// 	var test = itensSub[Object.keys(itensSub)[1]];
		// 	var i = 1;
		
		// } if (this.props.menuname == "social"){

		// 	var test = itensSub[Object.keys(itensSub)[2]];
		// 	var i = 2;
		
		// }



		// const test2 = Object.keys(test).map((keys) => test[keys].name);
		

		switch (this.props.menuname) {

			case "macroeconomico" :
				var test = itensSub[Object.keys(itensSub)[0]];
				//console.log(test)
				var i = 0;
				var test2 = Object.keys(test).map((keys) => test[keys].name);
				console.log(test2)
				break;
			
			case "regional" :
				var test = itensSub[Object.keys(itensSub)[1]];
				var i = 1;
				var test2 = Object.keys(test).map((keys) => test[keys].name);
				break;
			
			case "social" :
				var test = itensSub[Object.keys(itensSub)[2]];
				var i = 2;
				var test2 = Object.keys(test).map((keys) => test[keys].name);
				break;	

			default:
				var test = itensSub[Object.keys(itensSub)[0]];
				var i = 0;
				var test2 = Object.keys(test).map((keys) => test[keys].name);


		}

		console.log (this.props.menuname)


		



	    return(
			<div className="menucolor">    
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-3 col-md-2 sidebar">
							<ul className={"nav " + this.props.menucolor}>
								<li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname} <span className="sr-only">(current)</span></a></li>
								<ButtonGroup>{test2.map((a) => this.renderMenu(a, i,x))}</ButtonGroup>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default MenuLeft