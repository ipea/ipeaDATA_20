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
					<Menu 
          menuname="Ipeadata" loadSamples={this.loadSamples} menucolor="nav-sidebar4" sidecolor="sidebar4" menubackcolor="menubackcolor" other="nav-sidebar44"
                menuname1= "O que é" 
                menuname2= "Equipe Responsábel" 
                menuname3="Metadados"
                menuname4="Direitos de uso"  
                menuname5="Dicas"  
                menuname6="links"  
                menuname7="Fale Conosco"
          />
				</div>
				<div className="col-sm-9 col-sm-offset-2">
					<Tabs 
          item1="Temas" 
          item2="Fontes" 
          item3="Periodicidade" 
          item4="Índices Analíticos" 
          item5="Sinopse macroecônomica"
					item6="Séries mais usadas" link6="/Seriesmaisusadas"
          item7="Indicadores Ipea" 
          item8="Séries históricas" 
          item9="Ajuda"

          item10="Temas" 
          item11="Fontes" 
          item12="Nível Geográfico" 
          item13="Ajuda" 

          item17="Temas" 
          item18="Fontes" 
          item19="Nível Geográfico" 
          item20="Ajuda" 

            tabname1="Macroeconomico" tabcolor1="dropdown" 
            tabname2="Regional"       tabcolor2="dropdown2" 
            tabname3="Social"         tabcolor3="dropdown3"/>
				
				</div>
				<div className="col-sm-9 col-sm-offset-2 datatable" >
					
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












