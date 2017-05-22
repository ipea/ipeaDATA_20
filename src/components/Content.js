import React, { Component } from 'react'
import Metadados from "./Metadados"
import Equipe from "./Equipe"
import Fontes from "./Fontes"
import Series from "./Series"
import DireitosUso from "./DireitosUso"

        class Content extends Component {
    		render() {
    			console.log(this.props.url)
    
    			return(
    					<div>
    					{this.props.url === 'Equipe' &&
    						<Equipe/>
    					}
    					
    					{this.props.url === 'Metadados' &&
    						<Metadados/>
    					}
    					{this.props.url === 'fontes' &&
    						<Fontes/>
    					}
    					{this.props.url === 'direitos' &&
    						<DireitosUso/>
    					}
						{this.props.url === 'macroeconomico' &&
    						<Series/>
    					}

    					</div>

                )
    }
}

export default Content