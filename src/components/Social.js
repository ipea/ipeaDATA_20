import React from 'react';
import Navbar2 from './Navbar2'
import Menu from './Menu'
import Tabs from './Tabs'
//import Series from './Series'
import Jumbotron from './Jumbotron'
import Panel from './Panel'

class Social extends React.Component {
	render(){
		return (
			<div className="Ipeadata">
				<div className="Navbar2">
					<Navbar2 navname="Ipeadata"/>
				</div>
				<div className="Menu">
					<Menu menuname="Social" menucolor="nav-sidebar3" sidecolor="sidebar3" menubackcolor="menubackcolor3" other="nav-sidebar33"
                menuname1= "Temas" 
                menuname2= "Fontes" 
                menuname3="Nível Geográfico"
                menuname4="Ajuda"  />
				</div>

				<div className="col-sm-9 col-sm-offset-2">
					<Tabs 
						item1="Temas" 
         				item2="Fontes" 
          				item3="Periodicidade" 
          				item4="Índices Analíticos" 
          				item5="Sinopse macroecônomica"
						item6="Séries mais usadas"  link6="/Seriesmaisusadas"
          				item7="Indicadores Ipea" 
          				item8="Séries históricas" 
          				item9="Ajuda"

					    item10="Temas" 
                        item11="Fontes" 
                        item12="Nível Geográfico" 
                        item13="Ajuda" 

                    	item17="O que é" 
                        item18="Equipe Responsável" 
                        item19="Metadados"
                        item20="Direitos de uso"  
                        item21="Dicas"  
                        item22="links"  
                        item23="Fale Conosco"

						tabname1="Macroeconomico" tabcolor1="dropdown" 
						tabname2="Regional" tabcolor2="dropdown2" 
						tabname3="Ipeadata" tabcolor3="dropdown4" />
                      
				</div>
				
				<div className="Jumbotron" >
				<Panel title="Bem vindo ao Social" type="panel-danger"  paneltype="panel3"
				text1=" Base de dados econômicos e financeiros mantida pelo Ipea incluindo séries estatísticas da economia brasileira e dos aspectos que lhe são mais pertinentes na economia internacional. Os dados são atualizados e documentados de forma sistemática e apresentados na mesma unidade monetária. Recursos disponíveis permitem a manipulação matemática e a extração dos resultados em planilhas ou gráficos."
				text2="A busca das séries estatísticas pode ser feita por Palavras-chave na sua descrição, Temas ou assuntos de interesse, Fontes de publicação ou pela Periodicidade de sua compilação (anual, trimestral, mensal ou diária). A seleção também pode ser feita por meio dos Índices analíticos, onde as séries encontram-se estruturadas de acordo com esquemas contábeis ou conceituais, como nas Contas Nacionais, no Balanço de Pagamentos, nas publicações de Finanças Públicas e dos Agregados Monetários, entre outros. A Sinopse macroeconômica apresenta um panorama atualizado da conjuntura econômica brasileira. Por fim, para facilitar as pesquisas, as Séries históricas - ou seja, anteriores à criação do IBGE em 1939 e da FGV em 1947 - foram organizadas à parte."
				text3="As unidades de medida são padronizadas e consistentes, sendo as séries em valores nominais sempre que possível expressas em uma mesma moeda - reais (R$) para séries correntes, mil-réis para séries históricas e dólares ou libras esterlinas para séries em moedas estrangeiras - e em valores reais ou deflacionados expressas a preços do período mais recente ou atual, exceto quando há indicação explícita."
				text4="Por meio dos recursos disponíveis no Ipeadata, é possível extrair as séries em formato de tabelas e gráficos editáveis, bem como realizar operações matemáticas e estatísticas como deflacionar segundo os principais índices de preços (INPC-IBGE, IPCA-IBGE, IGP-FGV), selecionar períodos específicos, mudar a periodicidade das séries, gerar índices e taxas de crescimento."
				/>	
					
				</div>
			
			</div>

		)
	}
}

export default Social;












