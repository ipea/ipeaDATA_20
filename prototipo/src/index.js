import React from 'react';
import { render } from 'react-dom';
import {Grid, Col} from 'react-bootstrap'

import Navbar from './components/Navbar'
// import Tabs from './components/Tabs'
// import Menu from './components/Menu'
 import Tabs from './components/Tabs'



// <Grid>
//     <Row className="show-grid">
//       <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
//       <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
//     </Row>
// </Grid> 

render(<Tabs/>, document.querySelector('#main2'));
render(<Navbar/>, document.querySelector('#main'));
// render(<Tabs/>, document.querySelector('#main2'));
// render(<Menu/>, document.querySelector('#main3'));

