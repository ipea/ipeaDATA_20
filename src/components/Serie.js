import React from 'react';
import '../css/dashboard.css';
import Navbar2 from './Navbar2'
import Menu from './Menu'
import Tabs from './Tabs'
import Series from './Series'
import Jumbotron from './Jumbotron'
import ItemListener from './ItemListener'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import Datatable2 from './Datatable2'
import Panel from './Panel'

  
class Serie extends React.Component {
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
                        <Navbar2 navname="Ipeadata"/>
                    </div>
                    <div className="Menu">
                        <Menu menuname="Macroeconomico" menucolor="nav-sidebar1" sidecolor="sidebar1" menubackcolor="menubackcolor1" other="nav-sidebar11"
                            menuname1="Temas" 
                            menuname2="Fontes" 
                            menuname3="Periodicidade" 
                            menuname4="Índices Analíticos" 
                            menuname5="Sinopse macroecônomica"
                            menuname6="Séries mais usadas" link6="/Seriesmaisusadas" 
                            menuname7="Indicadores Ipea" 
                            menuname8="Séries históricas" 
                            menuname9="Ajuda"        />
                    </div>
                
                    <div className="col-sm-9 col-sm-offset-2">
                        <Tabs 
                          item1= "O que é" 
                          item2= "Equipe Responsábel" 
                          item3="Metadados"
                          item4="Direitos de uso"  
                          item5="Dicas"  
                          item6="links"  
                          item7="Fale Conosco"

                          item10="Temas" 
                          item11="Fontes" 
                          item12="Nível Geográfico" 
                          item13="Ajuda" 

                          item17="Temas" 
                          item18="Fontes" 
                          item19="Nível Geográfico" 
                          item20="Ajuda"



                        tabname1="Ipeadata" tabcolor1="dropdown4"  id1="menu4"
                        tabname2="Regional"  tabcolor2="dropdown2" id2="menu2" 
                        tabname3="Social" tabcolor3="dropdown3"    id3="menu3"/>
                    </div>

			<div>
			<Panel paneltype="panelserie" title="EMBI+ Risco-Brasil" type="panel-default" 
                               text1="Frequência: Diária de 29/04/1994 até 24/04/2017 "
                               text2="Fonte: JP Morgan "
                               text3="Comentário: O EMBI+ é um índice baseado nos bônus (títulos de dívida) emitidos pelos países emergentes. Mostra os retornos financeiros obtidos a cada dia por uma carteira selecionada de títulos desses países. A unidade de medida é o ponto-base. Dez pontos-base equivalem a um décimo de 1%.Os pontos mostram a diferença entre a taxa de retorno dos títulos de países emergentes e a oferecida por títulos emitidos pelo Tesouro americano. Essa diferença é o spread, ou o spread soberano. O EMBI+ foi criado para classificar somente países que apresentassem alto nível de risco segundo as agências de rating e que tivessem emitido títulos de valor mínimo de US$ 500 milhões, com prazo de ao menos 2,5 anos. Obs.: Metodologia descrita em Metodologia EMBI. "
							   text4="Atualizado em: 25/04/2017 "
                               />	
                                
			</div>
				<div className="col-sm-9 col-sm-offset-2 datatable" >				               
					<Datatable2/>
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
export default Serie;












