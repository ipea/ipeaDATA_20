import React, { Component } from 'react'


class MenuLeft extends Component {
    render(){
        return(
            <div className="menucolor">
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 col-md-2 sidebar">
          <ul className={"nav " + this.props.menucolor}>
            <li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname} <span className="sr-only">(current)</span></a></li>
            <button className="btn btn-default" onClick={this.props.loadSamples}>Adicionar</button>
            
          </ul>
        </div>
            </div>
      </div>
 </div>
        )
    }
}

export default MenuLeft