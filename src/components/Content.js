import React, { Component } from 'react'
import Metadados from "./Metadados"
import Equipe from "./Equipe"
import O_que_e from "./O_que_e"

        class Content extends Component {
    		render() {
    			console.log(this.props.url)
    
    			return(
    					<div>
    					{this.props.url === 'Equipe' &&
    						<Equipe/>
    					}
    					{this.props.url === 'O_que_e' &&
    						<O_que_e/>
    					}
    					{this.props.url === 'Metadados' &&
    						<Metadados/>
    					}
    					</div>

                )
    }
}

export default Content