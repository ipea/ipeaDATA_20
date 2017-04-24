/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import { render} from 'react-dom';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import samplefishes from '../sample-fishes';

//import Notfound from './Notfound';



class App extends React.Component {

    constructor() {
        super();
        this.addFishes = this.addFishes.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.state = {
            fishes: {},
            order: {}

        };
    }

    addFishes(fish) {
        //Atualizando o estado do objeto
        const fishes = {...this.state.fishes};
        //Adicionando um novo peixe
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        // setando o estado do peixe
        this.setState({fishes});
    }

    loadSamples() {

        this.setState(
                {fishes: samplefishes}
        );

    }
    render() {
        return(
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header tagline="parametro"/>
                        <ul className="list-of-fish">
                            {
                                Object
                                        .keys(this.state.fishes)
                                        .map(key => <Fish key={key} details={this.state.fishes[key]} />)
                            }
                        </ul>
                    </div>
                    <Order />
                    <Inventory  addFishes={
                    this.addFishes} loadSamples={
                    this.loadSamples} />
                
                </div>

                )
    }
}

export default App;


    