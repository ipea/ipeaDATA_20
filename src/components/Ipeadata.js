import React from 'react';
import Navbar2 from './Navbar2'
import Menu from './Menu'
import Tabs from './Tabs'
//import Series from './Series'
import Jumbotron from './Jumbotron'

class Ipeadata extends React.Component {
	render(){
		return (
			<div className="Ipeadata">
				<div className="Navbar2">
					<Navbar2 navname="Ipeadata"/>
				</div>
				<div className="Menu">
					<Menu menuname="Ipeadata"/>
				</div>
				<div className="col-sm-9 col-sm-offset-2">
					<Tabs tabname1="Macroeconomico" tabname2="Regional" tabname3="Social" />
				
				</div>
				<div className="Jumbotron" >
				<Jumbotron title="Bem vindo ao Ipeadata!"/>	
					
				</div>
			
			</div>

		)
	}
}

export default Ipeadata;












