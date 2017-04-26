import React from 'react';
import Navbar2 from './Navbar2'
import Menu from './Menu'
import Tabs from './Tabs'
import Series from './Series'
import Jumbotron from './Jumbotron'
import ItemListener from './ItemListener'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import Datatable from './Datatable'

  
class Ipeadata extends React.Component {
	constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);

    // getinitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }
    addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

	render(){
		return (
			<div className="Ipeadata">
				<div className="Navbar2">
					<Navbar2 navname="Ipeadata" menucolor="nav-sidebar4"/>
				</div>
				<div className="Menu">
					<Menu menuname="Ipeadata" loadSamples={this.loadSamples} menucolor="nav-sidebar4" sidecolor="sidebar4"/>
				</div>
				<div className="col-sm-9 col-sm-offset-2">
					<Tabs tabname1="Macroeconomico" tabcolor1="dropdown" tabname2="Regional" tabcolor2="dropdown2" tabname3="Social" tabcolor3="dropdown3"/>
				
				</div>
				<div className="col-sm-9 col-sm-offset-2 datatable" >
					<Datatable/>
				</div>
			
			</div>

		)
	}
}

// <ul className="list-of-fishes">
//             		{
//              		 Object
//                 		.keys(this.state.fishes)
//                 		.map(key => <Fish key={key} details={this.state.fishes[key]} />)
//             		}			
//           			</ul>
export default Ipeadata;












