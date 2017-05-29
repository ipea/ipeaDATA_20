import React, { Component } from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class MenuTop extends Component {
    constructor() {
        super();
        this.renderDropdownButton = this.renderDropdownButton.bind(this);
        this.menuUl = this.menuUl.bind(this);
    }
    menuUl(itens, numul) {
        numul++;
        //console.log("funcao");

        return (
            <ul className={`submenu-${numul}`}>
                {itens.map(function(subi, j) {
                    // console.log(subi.name +" " +  itens.name + " " +title);
                    return (
                        <li >
                            <Link to={`/${subi.fantasia}`}> {subi.name} </Link>
                            {subi.hasOwnProperty("subItens") &&
                                this.menuUl(subi.subItens, numul)}
                        </li>
                    );
                }, this)}
            </ul>
        );
    }
    renderDropdownButton(title, i, x) {
        return (
            <Link to={`/${title}`}>
                <ul
                    className="menu"
                    title={title}
                    key={i}
                    id={`dropdown-basic-${i}`}
                >
                    <li>
                        {title}
                        <ul className="submenu-1">

                            {x.map(function(itens, j) {
                                const itensSub = Object.keys(itens).map(
                                    keys => itens[keys]
                                );
                                const itensSub1 =
                                    itensSub[Object.keys(itensSub)[2]];
                                // console.log(itensSub1);
                                // console.log(itens.subItens[0].name);
                                const numul = 1;
                                return (
                                    <li >
                                        {" "}
                                        <Link to={`/${itens.fantasia}`}>
                                            {" "}{itens.name}{" "}
                                        </Link>
                                        {itens.hasOwnProperty("subItens") &&
                                            this.menuUl(itens.subItens, numul)}
                                    </li>
                                );
                            }, this)}
                        </ul>
                    </li>
                </ul>
            </Link>
        );
    }
    render() {
        const itens = this.props.itens;
        const itensNames = Object.keys(itens).map(keys => itens[keys].name);
        const itensSub = Object.keys(itens).map(keys => itens[keys].itens);

        return (
            <ButtonToolbar >
                {itensNames.map((a, i) =>
                    this.renderDropdownButton(a, i, itensSub[i])
                )}
            </ButtonToolbar>
        );
    }
}

export default MenuTop;