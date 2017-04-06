import React from 'react';
import Navbar2 from './Navbar2'
import Menu from './Menu'
import Tabs from './Tabs'
import Series from './Series'

class Ipeadata extends React.Component {
	render(){
		return (
			<div className="Ipeadata">
				<div className="Navbar2">
					<Navbar2 navname="Ipeadata 2.0"/>
				</div>
				<div className="Menu">
					<Menu/>
					<Tabs/>
				</div>
				<div className="Series">
					<Series/>
				</div>
			
			</div>

		)
	}
}

export default Ipeadata;












