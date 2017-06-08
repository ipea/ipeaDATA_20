import React, { Component } from "react";
import Metadados from "./Metadados";
import Equipe from "./Equipe";
import Fontes from "./Fontes";
import Series from "./Series";
import DireitosUso from "./DireitosUso";
import {Breadcrumb} from "react-bootstrap";
import GridSerie from "./GridSerie";

class Content extends Component {
    render() {
        
      
        var text = "erro";
        if (this.props.url.id !== undefined) {
            text = this.props.url.id;
            if (this.props.url.submenu !== undefined) {
                text = this.props.url.submenu;
                if (this.props.url.submenu2 !== undefined) {
                    text = this.props.url.submenu2;
            }
            }
        }
        //console.log(this.props.url)
        /*{this.props.url === "Equipe" && <Equipe />}
                {this.props.url === "Metadados" && <Metadados />}
                {this.props.url === "fontes" && <Fontes />}
                {this.props.url === "direitos" && <DireitosUso />}
                {this.props.url === "macroeconomico" && <Series />}*/

        return (
            <div>
      <GridSerie />
                <Breadcrumb>
                    <Breadcrumb.Item href="#">
                        {this.props.url.id}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                        {this.props.url.submenu}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {this.props.url.submenu2}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h1>{text}</h1>
            </div>
        );
    }
}

export default Content;