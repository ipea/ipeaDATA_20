import React from 'react';
import Navbar2 from './Navbar2'
import Menu from './Menu'
import Tabs from './Tabs'
import Series from './Series'
import Jumbotron from './Jumbotron'

class Social extends React.Component {
	render(){
		return (
			<div className="Ipeadata">
				<div className="Navbar2">
					<Navbar2 navname="Ipeadata"/>
				</div>
				<div className="Menu">
					<Menu menuname="Social"/>
					<Tabs tabname1="Ipeadata" tabname2="Macroeconomico" tabname3="Regional" />

				</div>
				<div className="Jumbotron" >
				<Jumbotron title="Bem vindo ao Social"/>	
					
				</div>
			
			</div>

		)
	}
}

export default Social;












