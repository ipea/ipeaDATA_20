import React from 'react';
import '../css/dashboard.css';
import Navbar2 from './Navbar2'
import Menu from './Menu'
import Tabs from './Tabs'
//import Series from './Series'
import Jumbotron from './Jumbotron'
import Panel from './Panel'
import Datatable from './Datatable'

class Seriesmaisusadas extends React.Component {
    render() {
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
                
                
                    <div className="col-sm-9 col-sm-offset-2 datatable" >
                       <Datatable/>
                
                    </div>
                
                </div>

                )
    }
}

export default Seriesmaisusadas;












