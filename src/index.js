import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router'

import Ipeadata from './components/Ipeadata'
import Macroeconomico from './components/Macroeconomico'
import Regional from './components/Regional'
import Social from './components/Social'
import Serie from './components/Serie'
import Seriesmaisusadas from './components/Seriesmaisusadas'
import Notfound from './components/Notfound'

import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
	return(
	<MuiThemeProvider>
    
	<BrowserRouter >
		<div>
			<Match exactly pattern="/" component={Ipeadata}/>		
			<Match exactly pattern="/Ipeadata" component={Ipeadata}/>
			<Match exactly pattern="/Macroeconomico" component={Macroeconomico}/>
			<Match exactly pattern="/Regional" component={Regional}/>
			<Match exactly pattern="/Social" component={Social}/>
			<Match exactly pattern='/Seriesmaisusadas' component={Seriesmaisusadas}/>
			<Match exactly pattern='/EMBI_Risco-Brasil' component={Serie}/>

			<Miss component={Notfound}/>

		</div>
	</BrowserRouter>

  </MuiThemeProvider>	
	)


}


render(<Root/>, document.querySelector('#main'));

