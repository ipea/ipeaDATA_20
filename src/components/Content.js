import React, { Component } from "react";
import Metadados from "./Metadados";
import Equipe from "./Equipe";
import Fontes from "./Fontes";
import Series from "./Series";
import DireitosUso from "./DireitosUso";

class Content extends Component {
    render() {
        //console.log(this.props.url)

        return (
            <div>
                {this.props.url === "macroeconomico/Equipe" && <Equipe />}
                {this.props.url === "macroeconomico/Metadados" && <Metadados />}
                {this.props.url === "macroeconomico/fontes" && <Fontes />}
                {this.props.url === "macroeconomico/direitos" && <DireitosUso />}
                {this.props.url === "macroeconomico" && <Series />}

            </div>
        );
    }
}

export default Content;