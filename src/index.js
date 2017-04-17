import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router'

import Ipeadata from './components/Ipeadata'
import Macroeconomico from './components/Macroeconomico'
import Regional from './components/Regional'
import Social from './components/Social'
import Notfound from './components/Notfound'

//const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
	return(
	<BrowserRouter >
		<div>
			<Match exactly pattern="/" component={Ipeadata}/>		
			<Match exactly pattern="/Ipeadata" component={Ipeadata}/>
			<Match exactly pattern="/Macroeconomico" component={Macroeconomico}/>
			<Match exactly pattern="/Regional" component={Regional}/>
			<Match exactly pattern="/Social" component={Social}/>
			<Miss component={Notfound}/>

		</div>
	</BrowserRouter>
	)


}


render(<Root/>, document.querySelector('#main'));

